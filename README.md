# How to run the Application
For running the Jasmine Test Application simply just open "index.html" in your browser.

# What is being tested?
## Test suite "RSS Feeds"
* ensures that variable allFeeds is defined and not empty
* ensures that each feed has a defined url and that each url is not empty
* ensures that each feed has a defined name and that each name is not empty

## Test suite "The menu"
* ensures that the menu element is hidden by default, and HTML/CSS is checked if hiding/showing of the menu element is working
* ensures that menu changes visibility when the icon is clicked and that tha visibility toggles when the menu is clicked again

## Test suite "Initial Entries"
* ensures that the loadFeed function is called and completed its work
* ensures that there is at least one single .entry element in .feed container

## Test suite "New Feed Selection"
* ensures that the content changes when a new feed is loaded by the loadFeed function
