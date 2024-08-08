describe('ContentContainer Component Tests', () => {
    const baseUrl = 'http://localhost:3000';
  
    beforeEach(() => {
      cy.visit(baseUrl);
    });
  
    it('should render the ContentContainer with the correct title and description', () => {
      cy.get('.title-text')
        .should('be.visible')
        .and('contain.text', 'Welcome to Askadev');
  

      cy.get('.description-text')
        .should('be.visible')
        .and('contain.text', 'At Askadev')
        .and('contain.text', 'knowledge')
        .and('contain.text', 'transformation')
        .and('contain.text', 'solutions')
        .and('contain.text', 'support')
        .and('contain.text', 'discovery')
        .and('contain.text', 'innovation')
        .and('contain.text', 'growth');
    });
  
    it('should render the AsciiArt component within the ContentContainer', () => {
      cy.get('.ascii-art-container').should('be.visible');
  
     
      cy.get('.ascii-art').should('contain.text', '....');
    });
  });
  