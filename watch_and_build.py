#!/usr/bin/env python3
"""
File watcher script that automatically regenerates index.html when changes are detected.
Uses a 3-second debounce to prevent excessive regeneration.
"""

import time
import os
import sys
from pathlib import Path
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
import threading
import subprocess


class PageRegenerationHandler(FileSystemEventHandler):
    """Handler for file system events that triggers page regeneration."""

    def __init__(self, debounce_seconds=3):
        """
        Initialize the handler.

        Args:
            debounce_seconds: Number of seconds to wait after a change before regenerating
        """
        self.debounce_seconds = debounce_seconds
        self.last_change_time = None
        self.timer = None
        self.lock = threading.Lock()
        self.script_dir = Path(__file__).parent
        self.process_script = self.script_dir / "process_pages.py"

    def on_modified(self, event):
        """Called when a file is modified."""
        if event.is_directory:
            return

        # Only watch HTML files in the pages directory
        if event.src_path.endswith('.html') and 'pages' in event.src_path:
            self.handle_change(event.src_path)

    def on_created(self, event):
        """Called when a file is created."""
        if event.is_directory:
            return

        # Only watch HTML files in the pages directory
        if event.src_path.endswith('.html') and 'pages' in event.src_path:
            self.handle_change(event.src_path)

    def on_deleted(self, event):
        """Called when a file is deleted."""
        if event.is_directory:
            return

        # Only watch HTML files in the pages directory
        if event.src_path.endswith('.html') and 'pages' in event.src_path:
            self.handle_change(event.src_path)

    def handle_change(self, file_path):
        """
        Handle a file change event with debouncing.

        Args:
            file_path: Path to the changed file
        """
        with self.lock:
            # Cancel existing timer if any
            if self.timer is not None:
                self.timer.cancel()

            # Update last change time
            self.last_change_time = time.time()

            # Print change detected message
            relative_path = os.path.relpath(file_path, self.script_dir)
            print(f"[*] Change detected: {relative_path}")
            print(f"[*] Waiting {self.debounce_seconds} seconds for more changes...")

            # Schedule regeneration after debounce period
            self.timer = threading.Timer(self.debounce_seconds, self.regenerate_pages)
            self.timer.start()

    def regenerate_pages(self):
        """Regenerate the index.html file."""
        with self.lock:
            print(f"\n{'='*60}")
            print(f"[+] Regenerating index.html...")
            print(f"{'='*60}")

            try:
                # Run the process_pages.py script
                result = subprocess.run(
                    [sys.executable, str(self.process_script)],
                    capture_output=True,
                    text=True,
                    cwd=str(self.script_dir)
                )

                if result.returncode == 0:
                    # Print the output
                    print(result.stdout)
                    print(f"[+] Regeneration complete!")
                else:
                    print(f"[!] Error during regeneration:")
                    print(result.stderr)

            except Exception as e:
                print(f"[!] Error running process_pages.py: {e}")

            print(f"{'='*60}\n")
            print("[*] Watching for changes...")

            # Reset timer
            self.timer = None


def main():
    """Main function to start the file watcher."""
    script_dir = Path(__file__).parent
    pages_dir = script_dir / "pages"

    # Check if pages directory exists
    if not pages_dir.exists():
        print(f"[!] Error: Pages directory not found: {pages_dir}")
        return 1

    # Check if process_pages.py exists
    process_script = script_dir / "process_pages.py"
    if not process_script.exists():
        print(f"[!] Error: process_pages.py not found: {process_script}")
        return 1

    print("="*60)
    print("File Watcher for Portfolio Pages")
    print("="*60)
    print(f"Watching directory: {pages_dir}")
    print(f"Debounce time: 3 seconds")
    print(f"Press Ctrl+C to stop")
    print("="*60)
    print()

    # Create event handler and observer
    event_handler = PageRegenerationHandler(debounce_seconds=3)
    observer = Observer()
    observer.schedule(event_handler, str(pages_dir), recursive=True)

    # Start watching
    observer.start()
    print("[*] Watching for changes...")
    print()

    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        print("\n[*] Stopping file watcher...")
        observer.stop()

    observer.join()
    print("[+] File watcher stopped.")

    return 0


if __name__ == "__main__":
    exit(main())
