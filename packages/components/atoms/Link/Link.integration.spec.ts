/// <reference types="cypress" />

context('Link', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?args=&id=atoms-link--default&viewMode=story');
  });

  it('should check if <nge-link> is present in the dom', () => {
    cy.get('nge-link').should('be.visible');
  });
});
