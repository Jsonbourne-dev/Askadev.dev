describe('QuestionsPanel Component Tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/community');
    });
  
    it('should render with default content and handle tab changes', () => {

      cy.get('.questions-title').should('contain.text', 'All Questions');
      cy.get('.questions-count').should('contain.text', '140,233 Questions');

      cy.get('.tab.selected').should('contain.text', 'Latest');

      cy.get('.tab').contains('Old').click();
      cy.get('.questions-title').should('contain.text', 'Old Questions');
      cy.get('.tab.selected').should('contain.text', 'Old');

      cy.get('.tab').contains('Unanswered').click();
      cy.get('.questions-title').should('contain.text', 'Unanswered Questions');
      cy.get('.tab.selected').should('contain.text', 'Unanswered');

      cy.get('.tab').contains('Bountied').click();
      cy.get('.questions-title').should('contain.text', 'Bountied Questions');
      cy.get('.tab.selected').should('contain.text', 'Bountied');

      cy.get('.tab').contains('Latest').click();
      cy.get('.questions-title').should('contain.text', 'All Questions');
      cy.get('.tab.selected').should('contain.text', 'Latest');
    });
  
    it('should generate a DID and navigate to /askquestion/DID', () => {
      cy.window().then((win) => {
        win.localStorage.removeItem('DID');
      });

      cy.get('.ask-question-button').click();

      cy.window().then((win) => {
        const did = win.localStorage.getItem('DID');
        expect(did).to.not.be.null; 
        cy.url().should('include', `/askquestion/${did}`);
      });
    });
  
    it('should use existing DID and navigate to /askquestion/DID', () => {
      const existingDID = 'DID-TEST1234';
      cy.window().then((win) => {
        win.localStorage.setItem('DID', existingDID);
      });
  
      cy.get('.ask-question-button').click();
  
      cy.url().should('include', `/askquestion/${existingDID}`);
    });
  });
  