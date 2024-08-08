describe('AskQuestionPage Component Tests', () => {
    const baseUrl = 'http://localhost:3000';
    const DID = 'DID-CKJYLUXMPA7';  
  
    beforeEach(() => {
      cy.visit(baseUrl, {
        onBeforeLoad(win) {
          win.localStorage.setItem('DID', DID);
        }
      });
  
      cy.visit(`${baseUrl}/askquestion/${DID}`);
    });
  
    it('should render the AskQuestionPage and submit a new question', () => {
     
      cy.get('#title').should('be.visible');
  
 
      cy.get('#title').type('How to write Cypress tests');
  
      cy.get('#questionText').should('be.visible').type('I need help writing Cypress tests.');
  
    
      cy.get('.ace_editor').should('be.visible');
      cy.get('.ace_text-input').type('console.log("Hello, World!");', { force: true });
  
      
      cy.get('input[placeholder="Flag 1"]').type('cypress');
      cy.get('input[placeholder="Flag 2"]').type('testing');
      cy.get('input[placeholder="Flag 3"]').type('javascript');
  
     
      cy.get('.aq-submit-button').click();
  
     
      cy.url().should('eq', `${baseUrl}/community`);
    });
  
    it('should show an error when the title exceeds 8 words', () => {
    
      cy.get('#title').type('This is a test title with more than eight words');
  
      cy.get('.aq-error-message').should('contain.text', 'Title cannot exceed 8 words.');
    });
  
    it('should navigate back to the community page when the back button is clicked', () => {

      cy.get('.aq-back-button').click();
  
      cy.url().should('eq', `${baseUrl}/community`);
    });
  });
  