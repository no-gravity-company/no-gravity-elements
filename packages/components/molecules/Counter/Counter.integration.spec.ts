/// <reference types="cypress" />

context('Counter', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?args=&id=my-counter-molecules--default&viewMode=story');
  });

  it('increments count on button click', () => {
    cy.get('nge-counter').shadow().find('button').first().click();
    cy.get('nge-counter').should('be.visible');
    cy.screenshot();
  });
});
