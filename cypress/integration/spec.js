describe('event-triggering', () => {
    it('play and pause the video without errors', () => {
        cy.visit('./static/minimal-test.html');
        cy.get("#ytvideo").iframeLoaded().its('document').getInDocument('.ytp-large-play-button').trigger('click');
        cy.wait(3000);
        cy.get("#ytvideo").iframeLoaded().its('document').getInDocument('.html5-main-video').trigger('click');
    });
});
1
