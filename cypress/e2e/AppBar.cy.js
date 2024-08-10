describe('AppBar Component Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should render the logo and profile icon on the root page', () => {
    cy.url().should('eq', 'http://localhost:3000/');
    cy.get('.logo').should('be.visible');
    cy.get('.profile-button').should('be.visible');
  });

  it('should render the logo and profile icon on the community page', () => {
    cy.visit('http://localhost:3000/community');
    cy.get('.logo').should('be.visible');
    cy.get('.profile-button').should('be.visible');
  });

  context('When on /community page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/community');
    });

    it('should show and hide the search bar on small screens', () => {
      cy.viewport(1200, 800);
      cy.get('.search-icon').click();
      cy.get('.search-bar-small').should('have.class', 'show');
    });

    it('should toggle the burger menu on small screens', () => {
      cy.viewport(1200, 800);
      cy.get('.burger-menu').click();
      cy.get('.burger-menu-content').should('have.class', 'show');
    });

    it('should handle the profile modal correctly', () => {
      cy.get('.profile-button').click();
      cy.get('.retro-button').contains('Generate DID').click();
      cy.get('.modal-overlay').should('not.exist');
    });

    it('should handle profile picture upload and display it', () => {
      cy.get('.profile-button').click();
      cy.get('.modal-overlay').should('be.visible');

      const testImage = 'profile.jpeg';
      cy.get('input[type="file"]').attachFile(testImage);
      cy.get('.close-button').click();
      cy.get('.modal-overlay').should('not.exist');
    });
  });

  context('When on the root page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });

    it('should toggle the modal on profile button click', () => {
      cy.get('.profile-button').click();
      cy.get('.modal-overlay').should('be.visible');

      cy.get('.close-button').click();
      cy.get('.modal-overlay').should('not.exist');
    });

    it('should not show the burger menu and small search bar on larger screens', () => {
      cy.viewport(1400, 900);
      cy.get('.burger-menu').should('not.exist');
      cy.get('.search-bar-small').should('not.exist');
    });
  });

  it('should handle DID generation and storage correctly', () => {
    cy.get('.profile-button').click();
    cy.get('.modal-overlay').should('be.visible');
    cy.get('.retro-button').contains('Generate DID').click();
    cy.get('.modal-overlay').should('not.exist');
  });
});
