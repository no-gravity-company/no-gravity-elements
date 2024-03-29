/// <reference types="cypress" />

context('Button', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?args=&id=atoms-button--default&viewMode=story');
  });

  it('should check if <nge-button> is present in the dom', () => {
    cy.get('nge-button').should('be.visible');
  });
});
