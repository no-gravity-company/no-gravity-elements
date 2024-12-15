/// <reference types="cypress" />

context('Page404', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?args=&id=page404--default&viewMode=story');
    });

    it('should check if <nge-page404> is present in the dom', () => {
        cy.get('nge-page404').should('be.visible');
    });
});
    