/// <reference types="cypress" />

context('Counter', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?args=&id=my-counterr--default&viewMode=story');
    });

    it('increments count on button click', () => {
        cy.get('my-counter').shadow().find('button').first().click();
        cy.get('my-counter').should('be.visible');
    });
});
