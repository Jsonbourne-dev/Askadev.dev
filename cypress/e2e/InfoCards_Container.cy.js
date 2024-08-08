describe('InfoCardsContainer Component Tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/');
    });
  
    it('should render all InfoCards with correct titles and values', () => {
      cy.get('.info-card').eq(0).within(() => {
        cy.get('.card-title').should('contain.text', 'Questions Asked');
        cy.get('.card-value').should('contain.text', '7,214');
      });

      cy.get('.info-card').eq(1).within(() => {
        cy.get('.card-title').should('contain.text', 'Joined Users');
        cy.get('.card-value').should('contain.text', '5,678');
      });
  

      cy.get('.info-card').eq(2).within(() => {
        cy.get('.card-title').should('contain.text', 'Questions Solved');
        cy.get('.card-value').should('contain.text', '6,560');
      });
    });
  });
  