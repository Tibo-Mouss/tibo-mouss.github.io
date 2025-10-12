# Structure of the Project :
This is my portfolio.

All pages are in the pages folder. They are then all joined together in a single file via a python script in process_pages.py
That way we can work easily on smaller files.
In order to add one subfile to the main index.html for generation, we need to add <page name="{name_of_file}"> to the file pages/index.html in the correct place.

Images/videos/css/javascript are in the my_assets folder

# Translations

The portfolio is in english by default, but can be translated in french via a key - value system done in javascript.
By adding trad="{TRANSLATION_KEY}", you make the inner html of the block be able to be replaced.
Everytime new text is created / edited, i want you to find/create the corresponding keys in the file translations.js to add the french translations of the english text.

# Project pages

Each project file is a bit different. 
In order to add a  project, you also need to add a new list item <li> to pages/portfolio.html

# Image slider
When adding an image slider, javascript needs to have its name registered in the list defined in script.js called : "slideIndex_dict"