describe('Footer Component Tests', () => {
  
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });
  
    it('should render the footer on the home page', () => {
      cy.get('footer').should('contain.text', '© 2024 All Rights Reserved');
    });
  
    it('should have links with correct hrefs in the footer on the home page', () => {
      cy.get('a[href="/about"]').should('exist');
      cy.get('a[href="/contact"]').should('exist');
      cy.get('a[href="/privacy"]').should('exist');
      cy.get('a[href="/terms"]').should('exist');
    });
  
    it('should render the footer on the community page', () => {
      cy.visit('http://localhost:3000/#/community');
      cy.get('footer').should('exist');
      cy.get('footer').should('contain.text', '© 2024 All Rights Reserved');
    });
  
  });
  