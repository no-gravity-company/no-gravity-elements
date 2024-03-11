/// <reference types="cypress" />

context('InfoBox', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?args=&id=molecules-infobox--default&viewMode=story');
  });

  it('should check if <nge-info-box> is present in the dom', () => {
    cy.get('nge-info-box').should('be.visible');
  });
});
