describe('Q&A Flow', () => {
    it('should submit a question, verify it appears on the community page, and check if the views count increased by 1 after navigating back and forth, then submit three answers and verify each appears immediately, and check if views count increased to 3', () => {
      const newQuestionTitle = 'What is Cypress?';
      const newQuestionText = 'I want to know more about Cypress testing framework.';
      const answerTexts = [
        'Cypress is a testing tool for E2E testing.',
        'Cypress reliable testing for web applications.',
        'Cypress offers real-time browser interaction and debugging!!'
      ];
  
      cy.visit('http://localhost:3000/#/community');
      cy.contains('All Questions').should('be.visible');
  
      cy.contains('Ask Question').click();
      cy.url().should('include', '/askquestion');
  
      cy.get('input#title').type(newQuestionTitle);
      cy.get('textarea#questionText').type(newQuestionText);
  
      cy.window().then((win) => {
        const editor = win.ace.edit('codeEditor');
        editor.setValue('Cypress is a JavaScript end-to-end testing framework.');
      });
  
      cy.get('input').should('have.length.greaterThan', 3);
      cy.get('input').eq(3).type('testing');
      cy.get('input').eq(2).type('framework');
      cy.get('input').eq(1).type('cypress');
      cy.contains('Submit').click();
      cy.url().should('include', '/community');
  
      cy.contains(newQuestionTitle).click();
      cy.url().should('include', '/question');
  
      cy.contains('Back').click();
      cy.contains('1').should('be.visible');
  
      cy.contains(newQuestionTitle).click();
      cy.url().should('include', '/question');
  
      cy.get('textarea[placeholder="Your Answer"]').type(answerTexts[0]);
      cy.contains('Submit Answer').click();
  
      cy.contains(answerTexts[0]).should('be.visible');
  
      cy.get('textarea[placeholder="Your Answer"]').type(answerTexts[1]);
      cy.contains('Submit Answer').click();

      cy.contains(answerTexts[1]).should('be.visible');
  
      cy.get('textarea[placeholder="Your Answer"]').type(answerTexts[2]);
      cy.contains('Submit Answer').click();
  
      cy.contains(answerTexts[2]).should('be.visible');
  
      cy.contains('Back').click();
      
      // (3) answers (2) veiws 
      cy.contains('3').should('be.visible');
      cy.contains('2').should('be.visible');
    });
  });
  