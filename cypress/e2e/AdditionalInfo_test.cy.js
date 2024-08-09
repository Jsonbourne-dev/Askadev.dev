describe('AdditionalInfo Component Tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });
  
    it('should display the correct heading', () => {
      cy.get('.additional-info h2')
        .should('contain.text', 'Exploring Web5 and DIDs');
    });
  
    it('should highlight the "Web5" and "DIDs" text', () => {
      cy.get('.additional-info .highlight').eq(0)
        .should('have.text', 'Web5');
  
      cy.get('.additional-info .highlight').eq(1)
        .should('have.text', 'DIDs');
    });
  
    it('should mention "Askadev" in the paragraph', () => {
      cy.get('.additional-info .askadev')
        .should('have.text', 'Askadev');
    });
  
    it('should mention security and privacy in the paragraph', () => {
      cy.get('.additional-info p')
        .should('contain.text', 'security')
        .and('contain.text', 'privacy');
    });
  
    it('should render the paragraph correctly', () => {
      cy.get('.additional-info p')
        .should('contain.text', 'At Askadev, we\'re at the forefront of Web5')
        .and('contain.text', 'a fusion of Web3\'s decentralization with Web2\'s user-focused design')
        .and('contain.text', 'enhances security and privacy')
        .and('contain.text', 'offering a richer and more personal web experience')
        .and('contain.text', 'users control their own data')
        .and('contain.text', 'reducing reliance on intermediaries')
        .and('contain.text', 'boosting trust in digital interactions');
    });
  });
  