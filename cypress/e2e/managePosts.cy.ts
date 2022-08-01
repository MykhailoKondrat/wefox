import postsFixture from '../fixtures/posts.json'
describe("Manage posts", () => {

  beforeEach(() => {
    cy.intercept({ method:'GET', url:'**/posts' },postsFixture,
    ).as('getPosts')

  });

  it('Should allow to open and close manage post', () => {
    cy.visit("/");
    cy.wait('@getPosts')
    cy.get('[data-cy="add-post-button"]').click();
    cy.contains(/create new post/i)
    cy.get('[data-cy="manage-post-form"]').should('be.visible')
    cy.get('[data-cy="close-overlay-button"]').click()
    cy.get('[data-cy="manage-post-form"]').should('not.be.visible')
    cy.get('[data-cy="post-item"]').should('be.visible')
  })

  it("Should allow to add new post", () => {

    cy.intercept({ method:'POST', url:'**/posts' }
    ).as('createPost')

    cy.visit("/");
    cy.wait('@getPosts')
    cy.get('[data-cy="add-post-button"]').click();

    cy.get('[data-cy="title-input"]').type('Malaga')
    cy.get('[data-cy="content-input"]').type('Malaga Description')
    cy.get('[data-cy="image-url-input"]').type('image link')
    cy.get('[data-cy="lat-input"]').type('123')
    cy.get('[data-cy="long-input"]').type('123')
    cy.get('[data-cy="submit-button"]').click()
    cy.wait('@createPost').its('request.body').should('deep.equal', {
      content: "Malaga Description",
      image_url: "image link",
      lat: "123",
      long: "123",
      title: "Malaga",
    })

    cy.get('[data-cy="manage-post-form"]').should('not.be.visible')

    cy.wait('@getPosts')
  });
  it("Should allow to update existing post", () => {
    cy.intercept({ method:'PUT', url:'**/posts/**' }
    ).as('updatePost')

    cy.visit("/");
    cy.wait('@getPosts')
    cy.get('[data-cy="post-item"]').eq(0).find('[data-cy="edit-button"]').click();

    cy.get('[data-cy="title-input"]').clear().type('Malaga')
    cy.get('[data-cy="content-input"]').clear().type('Malaga Description')
    cy.get('[data-cy="image-url-input"]').clear().type('image link')
    cy.get('[data-cy="lat-input"]').clear().type('123')
    cy.get('[data-cy="long-input"]').clear().type('123')
    cy.get('[data-cy="submit-button"]').click()

    cy.wait('@updatePost').its('request').should(({url,body}) => {
      assert.include(url,'posts/1' )
      assert.deepEqual(body,{
        content: "Malaga Description",
        image_url: "image link",
        lat: "123",
        long: "123",
        title: "Malaga",
      } )
    })
    cy.get('[data-cy="manage-post-form"]').should('not.be.visible')
    cy.wait('@getPosts')
  });

  it( 'Should allow to delete item', () => {
    cy.intercept({ method:'DELETE', url:'**/posts/**' }).as('deletePost')
    cy.get('[data-cy="post-item"]').eq(0).find('[data-cy="delete-button"]').click();
    cy.wait('@deletePost').its('request.url').should('include', 'posts/1' )
    cy.wait('@getPosts')
  })
});
