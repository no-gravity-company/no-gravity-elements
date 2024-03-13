/// <reference types="cypress" />

context('Icon', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?args=&id=atoms-icon--default&viewMode=story');
  });

  it('should check if <nge-icon> is present in the dom', () => {
    cy.get('nge-icon').should('exist');
  });
});
