/// <reference types="cypress" />

context('Section', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?args=&id=section--default&viewMode=story');
    });

    it('should check if <nge-section> is present in the dom', () => {
        cy.get('nge-section').should('be.visible');
    });
});
    