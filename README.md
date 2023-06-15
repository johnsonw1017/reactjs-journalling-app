# Journalling app

## Brain dump
- Homepage (/): Welcome message at the top, contains current date as title, header has edit and delete icon and footer has the final edit date & time and a save button, the journal content is below title. Shows the current day entry if there is any.
- Calendar page (/calendar): contains a calendar of the current month with streak counter
- Journal page (/journal/:journalID): individual journal page, similar to the homepage but does not have the welcome message

(optional)
- Search page (/search): searches for keywords in the journal content and return results based on the frequency of the keyword appearance - may need to exclude words like "the, and, a" etc.
- photo upload feature in homepage and journal page

## File structure
- src: Source code
    - components - each functional component file
    - contexts - allows data to be passed down the component tree without passing props, this is where reducers and local storage is as well
    - pages - HTML rendered on each page
- App.js - content rendered to the client - routes
- index.js - configuration and startup, css codes go in index.css

## Project Day Plans
### 14 June 2023
[x] Create skeleton of app - file structure and placeholder files
[x] Organise routes in App.js

### 15 June 2023
[ ] Create Homepage with placeholder text
[ ] Figure out how to include rich text editor
[ ] Start on NoteContext - local storage