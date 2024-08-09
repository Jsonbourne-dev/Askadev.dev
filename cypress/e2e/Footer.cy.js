describe('Footer Component Tests', () => {
    const paths = ['/', '/community'];
  
    paths.forEach((path) => {
      context(`Testing Footer at ${path}`, () => {
        beforeEach(() => {
          cy.visit(`http://localhost:3000${path}`);
        });
  
        it('should render the footer with the correct content', () => {
          cy.get('.footer').should('be.visible');
  

          cy.get('.footer-content').should('contain.text', '© 2024 All Rights Reserved');
  
          cy.get('.footer-links').within(() => {
            cy.get('.footer-link').eq(0).should('have.attr', 'href', '/about').and('contain.text', 'About Us');
            cy.get('.footer-link').eq(1).should('have.attr', 'href', '/contact').and('contain.text', 'Contact');
            cy.get('.footer-link').eq(2).should('have.attr', 'href', '/privacy').and('contain.text', 'Privacy Policy');
            cy.get('.footer-link').eq(3).should('have.attr', 'href', '/terms').and('contain.text', 'Terms of Service');
          });
  
          cy.get('.footer-contact').should('contain.text', 'Support@askadev.com')
            .and('contain.text', '(406) 589-8118');
        });
      });
    });
  });
  