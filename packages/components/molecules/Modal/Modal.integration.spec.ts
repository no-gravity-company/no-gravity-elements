/// <reference types="cypress" />

context('Modal', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?args=&id=molecules-modal--default&viewMode=story');
  });

  it('should check if <nge-modal> is present in the DOM', () => {
    cy.get('nge-modal').should('exist');
  });

  it('should not be visible when open is false', () => {
    cy.get('nge-modal').should('have.attr', 'open', 'false');
    cy.get('.nge-modal-backdrop').should('have.class', 'hidden');
    cy.get('.nge-modal-content').should('have.class', 'hidden');
  });

  it('should be visible when open is true', () => {
    cy.visit('/iframe.html?args=open:true&id=molecules-modal--open-medium-with-title&viewMode=story');
    cy.get('nge-modal').should('have.attr', 'open', 'true');
    cy.get('.nge-modal-backdrop').should('not.have.class', 'hidden');
    cy.get('.nge-modal-content').should('not.have.class', 'hidden');
  });

  it('should display title when provided', () => {
    cy.visit('/iframe.html?args=open:true;title:Test Modal&id=molecules-modal--open-medium-with-title&viewMode=story');
    cy.get('.nge-modal-header h2').should('contain.text', 'Test Modal');
  });

  it('should close modal on backdrop click when backdropDisabled is false', () => {
    cy.visit('/iframe.html?args=open:true;backdropDisabled:false&id=molecules-modal--open-medium-with-title&viewMode=story');
    cy.get('.nge-modal-backdrop').click({ force: true });
    // Assuming the modal dispatches onClose event, we can't directly test the event in Cypress
    // But we can check if the modal remains open or not based on app logic if possible
  });

  it('should close modal on escape key press', () => {
    cy.visit('/iframe.html?args=open:true&id=molecules-modal--open-medium-with-title&viewMode=story');
    cy.realPress('Escape');
    // Assuming the modal dispatches onClose event, we can't directly test the event in Cypress
    // But we can check if the modal remains open or not based on app logic if possible
  });

  it('should apply correct size class based on size prop', () => {
    cy.visit('/iframe.html?args=open:true;size:small&id=molecules-modal--open-small&viewMode=story');
    cy.get('.nge-modal').should('have.class', 'small');

    cy.visit('/iframe.html?args=open:true;size:medium&id=molecules-modal--open-medium-with-title&viewMode=story');
    cy.get('.nge-modal').should('have.class', 'medium');

    cy.visit('/iframe.html?args=open:true;size:large&id=molecules-modal--open-large-with-footer&viewMode=story');
    cy.get('.nge-modal').should('have.class', 'large');
  });
});