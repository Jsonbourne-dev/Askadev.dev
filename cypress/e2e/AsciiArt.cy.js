describe('AsciiArt Component Tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });
  
    it('should render the ASCII art correctly', () => {
      cy.get('.ascii-art-container').should('be.visible');
  
      cy.get('.ascii-art').should('be.visible');
  

      cy.get('.ascii-art').should('contain.text', '....')
                          .and('contain.text', '\\')
                          .and('contain.text', '.##')
                          .and('contain.text', '####')
                          .and('contain.text', ':')
                          .and('contain.text', '\'\'\'');
    });
  
    it('should have correct class names applied', () => {
      cy.get('.ascii-art-container').should('have.class', 'ascii-art-container');
      cy.get('.ascii-art-wrapper').should('have.class', 'ascii-art-wrapper');
      cy.get('.ascii-art').should('have.class', 'ascii-art');
    });
  });
  