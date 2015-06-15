Coding changes made due to Udacity Reviewer Comments

Things that needed to be done to accomplish P6

# How will I complete this project?

1. Download the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
2. Review the functionality of the application within your browser.
3. Explore the application's HTML (*./index.html*), CSS (*./css/style.css*) and JavaScript (*./js/app.js*) to gain an understanding of how it works.
4. Explore the Jasmine spec file in *./jasmine/spec/feedreader.js*
5. Edit the allFeeds variable in *./js/app.js* to make the provided test fail and see how Jasmine visualizes this failure in your application.
6. Return the allFeeds variable to a passing state.
7. Write a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
8. Write a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
9. Write a new test suite named "The menu".
10. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
11. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
12. Write a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container. Remember, loadFeed() is asynchronous so this test wil require the use of Jasmine's beforeEach and asynchronous done() function.
13. Write a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes. Remember, loadFeed() is asynchronous.
14. When complete - all of your tests should pass.

## Resources I used

* www.google.com
* jasmine.github.io
* http://jasmine.github.io/2.0/introduction.html
* https://en.wikipedia.org/wiki/Jasmine_(JavaScript_framework)
* http://www.htmlgoodies.com/beyond/javascript/testing-javascript-using-the-jasmine-framework.html
* www.udacity.com P6 - Feedreader testing


# How to run the Application -  open "index.html" in your browser.

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
