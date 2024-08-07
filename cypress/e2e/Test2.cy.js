//WILL MOSTLY RETURN ERRORS!!

describe('AppBar Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  context('On /community Route', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/community');
    });

    it('should display the search bar and handle search input', () => {
      cy.get('.search-input').should('exist');
      cy.get('.search-input').type('Test Search');
      cy.get('.search-input').should('have.value', 'Test Search');
    });

    it('should show search bar on small screens when toggled', () => {
      cy.viewport('iphone-6');
      cy.get('.search-icon').click();
      cy.get('.search-bar-small').should('have.class', 'show');
      cy.get('.search-icon').click();
      cy.get('.search-bar-small').should('not.have.class', 'show');
    });

    it('should display the burger menu and handle menu items', () => {
      cy.viewport('iphone-6');
      cy.get('.burger-menu').click();
      cy.get('.burger-menu-content').should('have.class', 'show');
      cy.get('a[href="/user"]').should('exist').click();
      cy.url().should('include', '/user');
    });

    it('should handle the profile modal on /community route', () => {
      cy.get('.profile-button').click();
      cy.get('.modal-overlay').should('be.visible');
      cy.get('.close-button').click();
      cy.get('.modal-overlay').should('not.exist');
    });
  });

  context('On Home Route', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });

    it('should display the search bar for large screens', () => {
      cy.viewport('macbook-15');
      cy.get('.search-input').should('exist');
    });

    it('should display "Community" link on large screens', () => {
      cy.viewport('macbook-15');
      cy.get('a[href="/community"]').should('exist');
    });

    it('should not display the burger menu on large screens', () => {
      cy.viewport('macbook-15');
      cy.get('.burger-menu').should('not.exist');
    });

    it('should handle profile modal operations on home route', () => {
      cy.get('.profile-button').click();
      cy.get('.modal-overlay').should('be.visible');
      cy.get('.close-button').click();
      cy.get('.modal-overlay').should('not.exist');
    });
  });

  it('should handle profile picture upload', () => {
    cy.get('.profile-button').click();
    cy.get('input[type="file"]').attachFile('path/to/sample-profile-picture.jpg');
    cy.get('.profile-picture').should('be.visible');
  });

  it('should handle Generate DID button and form submission', () => {
    cy.get('.profile-button').click();
    cy.get('.modal-overlay').should('be.visible');
    cy.get('button').contains('Generate DID').click();
    //cy.get('input[name="dlDID"]').should('exist').type('NEW-DID-123');
    cy.get('button').contains('Save DID').click();
    cy.get('.modal-overlay').should('not.exist');
  });
});
