$(function() {
    describe('RSS Feeds', function() {
        // allFeeds is defined and not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // check feed has a defined url and is not empty
        it('each feed has a URL defined and the URL is not empty', function(){
            function checkForUrl(element) {
                expect(element.url).toBeDefined();
                expect(element.url.length).not.toBe(0);
            }
            allFeeds.forEach(checkForUrl);
        });

        // check feed has a defined name and is not empty
        it('each feed has a name defined and the name is not empty', function(){
            function checkForName(element) {
                expect(element.name).toBeDefined();
                expect(element.name.length).not.toBe(0);
                expect(element.name).toBeTruthy();
            }
            allFeeds.forEach(checkForName);
        });
    });

    /* test suite "The menu" */
    describe('The menu', function() {

        // prove if menu element is hidden by default
        it('Menu element is hidden by default', function(){
            // Changes due to Udacity Review
            expect($('body').hasClass('menu-hidden')).toBe(true);
    });

        // change menu visibility on/off when clicked
        it("Menu changes visibility", function() {
            var menuIcon = $('.menu-icon-link');
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* test suite "Initial Entries" */
    describe("Initial Entries", function() {
        // Load feeds beforehand with timeout to be able to run tests
            beforeEach(function(done) {
            $('.feed').empty(); //suggested by Udacity reviewr
            loadFeed(0, done);
        });

        // Ensure that at least one element is shown
        it("Ensure .entry is shown", function(done) {
            var entries = document.querySelectorAll('.entry');
            expect(entries.length).toBeGreaterThan(0);
        });
    });

    /* test suite "New Feed Selection" */
    describe("New Feed Selection", function() {

        // Simulate refresh.  Changes suggested by Udacity Reviewer  
        beforeEach(function(done) {
            $('.feed').empty();
            loadFeed(3, function() {
                var oldContent = $('.feed').html();
                loadFeed(1, function(){
                var newContent = $('.feed').html();
                done();
                });
            });
        });

        it("new loadFeed changes content", function(done) {
                expect(oldContent).not.toEqual(newContent);
        });
    });
}());
