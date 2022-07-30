describe('empty spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.contains(/hello world/i);
  })
});
