/// <reference types="cypress" />

context('Typography', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?args=&id=atoms-typography--default&viewMode=story');
  });

  it('should check if <nge-typography> is present in the dom', () => {
    cy.get('nge-typography').should('be.visible');
  });
});
