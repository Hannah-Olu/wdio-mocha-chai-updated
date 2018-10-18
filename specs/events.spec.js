const Events = require('../page-objects/Events')

describe('Events page test', function(){
    before('Navigate to events page', function(){
        browser.url('/events');
    })

    it ('should be visible', function (){
        expect (Events.eventsHeading.isVisible()).to.be.true
    })
    
    it('should be visible', function (){
        expect (Events.eventsBtn.isVisible()).to.be.true
    })

})