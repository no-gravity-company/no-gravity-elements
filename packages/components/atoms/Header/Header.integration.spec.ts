/// <reference types="cypress" />

context('Header', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?args=&id=header--default&viewMode=story');
    });

    it('should check if <nge-header> is present in the dom', () => {
        cy.get('nge-header').should('be.visible');
    });
});
    