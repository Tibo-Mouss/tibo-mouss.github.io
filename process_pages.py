#!/usr/bin/env python3
"""
Script to process page includes in index.html
Finds all <page name="{name}"/> tags and replaces them with the content
of the corresponding HTML file from the pages directory.
"""

import re
import os
from pathlib import Path


def read_file(file_path):
    """Read and return the content of a file."""
    with open(file_path, 'r', encoding='utf-8') as f:
        return f.read()


def write_file(file_path, content):
    """Write content to a file."""
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)


def process_page_includes(input_file, output_file, pages_dir):
    """
    Process page includes in the input file and write to output file.

    Args:
        input_file: Path to the input HTML file
        output_file: Path to the output HTML file
        pages_dir: Directory containing the page HTML files
    """
    # Read the input file
    content = read_file(input_file)

    # Pattern to match <page name="filename"/> or <page name="filename" />
    pattern = r'<page\s+name="([^"]+)"\s*/>'

    def replace_page_tag(match):
        """Replace a page tag with the content of the corresponding file."""
        page_name = match.group(1)
        page_file = os.path.join(pages_dir, f"{page_name}.html")

        if os.path.exists(page_file):
            print(f"[+] Including: {page_name}.html")
            return read_file(page_file)
        else:
            print(f"[!] Warning: {page_name}.html not found in {pages_dir}")
            return match.group(0)  # Keep original tag if file not found

    # Replace all page tags
    processed_content = re.sub(pattern, replace_page_tag, content)

    # Write to output file
    write_file(output_file, processed_content)
    print(f"\n[+] Output written to: {output_file}")


def main():
    """Main function to process the portfolio index.html file."""
    # Get the script directory (project root)
    script_dir = Path(__file__).parent

    # Define paths
    input_file = script_dir / "pages" / "index.html"
    output_file = script_dir / "index.html"
    pages_dir = script_dir / "pages"

    print("Processing page includes...")
    print(f"Input:  {input_file}")
    print(f"Output: {output_file}")
    print(f"Pages directory: {pages_dir}\n")

    # Check if input file exists
    if not input_file.exists():
        print(f"Error: Input file not found: {input_file}")
        return 1

    # Check if pages directory exists
    if not pages_dir.exists():
        print(f"Error: Pages directory not found: {pages_dir}")
        return 1

    # Process the file
    process_page_includes(str(input_file), str(output_file), str(pages_dir))

    return 0


if __name__ == "__main__":
    exit(main())
