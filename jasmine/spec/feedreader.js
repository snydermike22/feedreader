$(function() {
    describe('RSS Feeds', function() {
        // allFeeds is defined and not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // feed has a defined url and is not empty    
        it('each feed has a URL defined and the URL is not empty', function(){              
            function checkForUrl(element) {
                expect(element.url).toBeDefined();
                expect(element.url.length).not.toBe(0);
            }
            allFeeds.forEach(checkForUrl);
        });

        // feed has a defined name and is not empty
        it('each feed has a name defined and the name is not empty', function(){              
            function checkForName(element) {
                expect(element.name).toBeDefined();
                expect(element.name.length).not.toBe(0);
            }
            allFeeds.forEach(checkForName);
        });         
    });

    /* test suite "The menu" */
    describe('The menu', function() {

        // prove if menu element is hidden by default
        it('Menu element is hidden by default', function(){
            hiddenMenuElement = $('body').hasClass('menu-hidden');
            expect(hiddenMenuElement).toBe(true);
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
            setTimeout(function() {
                loadFeed(0);
                done();
            }, 3000);
        });

        // Ensure that at least one element is shown
        it("Ensure .entry is shown", function(done) {
            var entries = document.querySelectorAll('.entry');
            expect(entries.length).toBeGreaterThan(0);
            done();
        });
    });

    /* test suite "New Feed Selection" */
    describe("New Feed Selection", function() {
        var entryInitial = null;
        var entryCurrent = null;

        // Simulate refresh
        beforeEach(function(done) {
            // increased timeout interval
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
            entryInitial = document.querySelectorAll('.entry').item(0).innerHTML;
            // define timeout
            setTimeout(function() {
                loadFeed(1);
                done();
            }, 3000);
        });

        it("new loadFeed changes content", function(done) {
            setTimeout(function() {
                entryCurrent = document.querySelectorAll('.entry').item(0).innerHTML;
                expect(entryInitial).not.toContain(entryCurrent);
                done();
            }, 9000); 
        });
    });
}());
