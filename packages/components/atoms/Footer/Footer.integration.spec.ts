/// <reference types="cypress" />

context('Footer', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?args=&id=footer--default&viewMode=story');
    });

    it('should check if <nge-footer> is present in the dom', () => {
        cy.get('nge-footer').should('be.visible');
    });
});
    