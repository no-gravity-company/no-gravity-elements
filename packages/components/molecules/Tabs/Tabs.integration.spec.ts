/// <reference types="cypress" />

context('Tabs', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?args=&id=molecules-tabs--default&viewMode=story');
  });

  it('should check if <nge-tabs> is present in the dom', () => {
    cy.get('nge-tabs').should('be.visible');
  });

  it('should render tabs headers and panels', () => {
    cy.get('.tabs-headers .tab').should('have.length.gte', 2);
    cy.get('.tabs-panels .tab-panel').should('have.length.gte', 2);
    cy.get('.tab.active').should('have.length', 1);
    cy.get('.tab-panel.active').should('have.length', 1);
  });

  it('should switch tabs on click', () => {
    cy.get('.tab').eq(0).should('have.class', 'active');
    cy.get('.tab-panel').eq(0).should('have.class', 'active').invoke('attr', 'hidden').should('not.exist');

    cy.get('.tab').eq(1).click();
    cy.get('.tab').eq(1).should('have.class', 'active');
    cy.get('.tab').eq(0).should('not.have.class', 'active');
    cy.get('.tab-panel').eq(1).should('have.class', 'active');
    cy.get('.tab-panel').eq(0).should('not.have.class', 'active').invoke('attr', 'hidden').should('exist');
  });

  it('should render vertical orientation correctly', () => {
    cy.visit('/iframe.html?args=orientation%3Dvertical;id=molecules-tabs--vertical&viewMode=story');
    cy.get('.nge-tabs.vertical').should('exist');
    cy.get('.tabs-headers.vertical').should('exist');
  });
});