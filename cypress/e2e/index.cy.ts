import postsFixture from '../fixtures/posts.json'
describe("Posts page", () => {

  it("Should have add new post button on it", () => {
    cy.visit("/");
    cy.get('[data-cy="add-post-button"]').should('be.visible')
  });

  it("Should render lists of post", () => {
    cy.intercept({ method:'GET', url:'**/posts' },postsFixture,
    ).as('getPosts')

    cy.visit("/");

    cy.get('[data-cy="loader-spinner"]')
    cy.wait('@getPosts')
    cy.get('[data-cy="post-item"]').should("have.length", 3);
  });
  it('Should render info message when no posts', () => {
    cy.intercept({ method:'GET', url:'**/posts' },[],
    ).as('getPosts')
    cy.visit("/");

    cy.get('[data-cy="loader-spinner"]')
    cy.wait('@getPosts')
    cy.get('[data-cy="no-posts-info"]')
  })
});
