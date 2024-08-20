describe('Information Section Component', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/');
    });
  
    it('should render the InformationSection with correct title and text', () => {
      cy.get('h2').contains('Test Title').should('exist');
      cy.get('p').contains('This is a test description text for the Information Section.').should('exist');
    });
  
    it('should render with correct position on the left', () => {
      cy.get('div').should('have.css', 'left', '225px');
    });
  
    it('should render with correct position on the right', () => {
      cy.get('div').should('have.css', 'right', '225px');
    });
  
    it('should render with correct top position', () => {
      cy.get('div').should('have.css', 'top', '100px');
    });
  
    it('should adjust the width and padding on smaller screens', () => {
      cy.viewport(900, 800);
      cy.get('div').should('have.css', 'width', '70%');
      cy.get('div').should('have.css', 'padding', '15px');
  
      cy.viewport(750, 800);
      cy.get('div').should('have.css', 'width', '60%');
      cy.get('div').should('have.css', 'padding', '10px');
  
      cy.viewport(500, 800);
      cy.get('div').should('have.css', 'width', '90%');
      cy.get('div').should('have.css', 'padding', '5px');
      cy.get('div').should('have.css', 'max-width', '300px');
    });
  
    it('should adjust the title font size on smaller screens', () => {
      cy.viewport(900, 800);
      cy.get('h2').should('have.css', 'font-size', '1.5rem');
  
      cy.viewport(750, 800);
      cy.get('h2').should('have.css', 'font-size', '1.25rem');
  
      cy.viewport(500, 800);
      cy.get('h2').should('have.css', 'font-size', '1rem');
    });
  
    it('should adjust the text font size on smaller screens', () => {
      cy.viewport(900, 800);
      cy.get('p').should('have.css', 'font-size', '0.875rem');
  
      cy.viewport(750, 800);
      cy.get('p').should('have.css', 'font-size', '0.75rem');
  
      cy.viewport(500, 800);
      cy.get('p').should('have.css', 'font-size', '0.6rem');
    });
  });