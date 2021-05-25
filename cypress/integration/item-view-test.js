import
describe('Item View Page', () => {

  beforeEach(() => {
    cy.fixture('../fixtures/item-data.json')
    .then((items) => {
      cy.intercept('http://localhost:3001/items', {
        body: items,
        statusCode: 200
      });
    });
    cy.visit('http://localhost:3000')
  });

it('Should display a form when the page loads', () => {
  .get()
})
})
