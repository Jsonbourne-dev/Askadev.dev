describe('QuestionsPanel Component', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/#/community');

      cy.window().then((win) => {
        cy.stub(win.localStorage, 'getItem').callThrough();
        cy.stub(win.localStorage, 'setItem').callThrough();
      });
    });
  
    it('should navigate to the Ask Question page with a DID', () => {
      cy.get('button').contains('Ask Question').click();
  
      cy.window().then((win) => {
        expect(win.localStorage.setItem).to.be.called;
        const did = win.localStorage.setItem.args[0][1];
        expect(did).to.match(/^DID-/);
  
        cy.url().should('include', `/askquestion/${did}`);
      });
    });
  
    it('should switch tabs and update the title correctly', () => {
      const tabs = ['Latest', 'Old', 'Unanswered', 'Bountied'];
  
      tabs.forEach((tab) => {
        cy.get('div').contains(tab).click();
  
        cy.get('div.selected').should('have.text', tab);
  
        cy.get('div').contains(tab === 'Latest' ? 'All Questions' : `${tab} Questions`);
      });
    });
  });
  