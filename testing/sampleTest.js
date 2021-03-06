var selenium = require('selenium-webdriver');
require('chromedriver');

describe('Selenium Tutorial', function() {

    // Open the TECH.insight website in the browser before each test is run
    beforeEach(function(done) {
        this.driver = new selenium.Builder().
            withCapabilities(selenium.Capabilities.chrome()).
            build();

        this.driver.get('http://dakotacastleberg.netlify.com/').then(done);
    });

    // Close the website after each test is run (so that it is opened fresh each time)
    afterEach(function(done) {
        this.driver.quit().then(done);
    });

    // Test to ensure we are on the home page by checking the <body> tag id attribute
    it('Should be on the home page', function(done) {
        var element = this.driver.findElement(selenium.By.tagName('body'));

        element.getAttribute('id').then(function(id) {
            expect(id).toBe('page-top');
            done();
        });
    });

    //Test the navigation bar by clicking on the 'REVIEW' link and checking the URL changes to '/review'
    it('Has a working nav', function(done) {
        var element = this.driver.findElement(selenium.By.cssSelector("a[href*='/img/resumeApril2017.pdf']"));

        element.click();
    // setTimeout(function(){}, 5000);
    //      this.driver.getCurrentUrl().then(function(value) {
    //          expect(value).toContain('/review');
    //          done();
    //      });
    });
});
