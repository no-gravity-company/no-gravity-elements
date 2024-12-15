/// <reference types="cypress" />

context('BannerCta', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?args=&id=bannercta--default&viewMode=story');
    });

    it('should check if <nge-banner-cta> is present in the dom', () => {
        cy.get('nge-banner-cta').should('be.visible');
    });
});
    