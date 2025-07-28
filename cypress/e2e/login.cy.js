describe('Login Flow', () => {
  it('logs in and redirects to profile page', () => {
    cy.visit('/login');

    cy.get('input[name="email"]').type('admin@example.com');
    cy.get('input[name="password"]').type('123456'); 

    cy.get('form').submit();

    cy.url().should('include', '/profile');
    cy.contains('Email: admin@example.com');
    cy.contains('Role: admin');
  });
});