const Insight = require('../page-objects/Insight')

describe('Insight test', function() {
    before('Navigate to insight page', function() {
        browser.url('/insights')
    })

    it('should be visible', function() {
        expect(Insight.sideBar.isVisible()).to.be.true
    })

    it('should not show error while capturing screenshot', function() {
        expect(Insight.fillForm()).to.not.throw
    })
})