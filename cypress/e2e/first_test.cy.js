describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    cy.get('h1')
      .invoke('text')
      .should('equal', 'Practice Page');
  })
})