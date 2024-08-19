describe('Ask Question Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/#/askquestion/DID-A767S7OZANO');
    });
  
    it('should render the form and its elements', () => {
      cy.get('h2').should('contain.text', 'Ask a Question');
      cy.get('input#title').should('exist');
      cy.get('textarea#questionText').should('exist');
      cy.get('div.ace_editor').should('exist'); 
      cy.get('input').should('have.length.gte', 4); 
      cy.get('button').contains('Submit Question').should('exist');
      cy.get('button').contains('Back').should('exist');
    });
  
    it('should validate the title input', () => {
      cy.get('input#title').type('A very long title that exceeds eight words limit').blur();
      cy.get('div').contains('Title cannot exceed 8 words.').should('exist');
  
      cy.get('input#title').clear().type('Short title').blur();
      cy.get('div').contains('Title cannot exceed 8 words.').should('not.exist');
    });
  
    it('should submit the form with valid inputs and save data', () => {
      cy.get('input#title').type('Test Title');
      cy.get('textarea#questionText').type('This is a test question.');
  
      cy.get('div.ace_editor').then(($editor) => {
        const aceEditor = $editor[0].$aceEditor;
      });
  
      cy.get('input').eq(1).type('Flag1');
      cy.get('input').eq(2).type('Flag2');
      cy.get('input').eq(3).type('Flag3');
  
      cy.window().then((win) => {
        cy.get('button').contains('Submit Question').click();
        const updatedQuestions = JSON.parse(win.localStorage.getItem('questions')) || [];
      });
  
      cy.url().should('eq', 'http://localhost:3000/#/community');
    });
  
    it('should navigate back to the community page', () => {
      cy.get('button').contains('Back').click();
      cy.url().should('eq', 'http://localhost:3000/#/community');
    });
  
  });
  