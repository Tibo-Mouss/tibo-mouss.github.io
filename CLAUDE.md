# Structure of the Project :
This is my portfolio.

All pages are in the pages folder. They are then all joined together in a single file via a python script in process_pages.py
That way we can work easily on smaller files.

Images/videos/css/javascript are in the my_assets folder

# Translations

The portfolio is in english by default, but can be translated in french via a key - value system done in javascript.
By adding trad="{TRANSLATION_KEY}", you make the inner html of the block be able to be replaced.
Everytime new text is created / edited, i want you to find/create the corresponding keys in the file translations.js to add the french translations of the english text.
