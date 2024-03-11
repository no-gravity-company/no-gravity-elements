/// <reference types="cypress" />

context('Card', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?args=&id=atoms-card--default&viewMode=story');
  });

  it('should check if <nge-card> is present in the dom', () => {
    cy.get('nge-card').should('be.visible');
  });
});
