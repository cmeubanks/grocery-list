
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

  it('Should render the form field and page title onload', () => {
    cy.get('h1').contains('Grocery Store List')
      .get('form').get('input').should('have.length', 2)
      .get('form').should('have.value', '')
  })

  it('Should fetch existing cards', () => {
    cy.get('.card').should('have.length', 3)
  })

  it('Should add a new card after information is entered in the form fields', () => {
    cy.get('form').get('input[name="name"]')
      .type('Peppers')
      .get('form').get('input[name="amount"]')
      .type('4 jalapenos')
      .get('button').contains('SUBMIT')
      .click()
      cy.get('.card').should('have.length', 4)
  })
  it('cards should contain details from the form field', () => {
    cy.get('.card-container')
    .get('.card').get('h2')
    .get('#1').contains('Tortillas')
    .get('.card').get('p')
    .get('#1').contains('1 bag')
  })
})
