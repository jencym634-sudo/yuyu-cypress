describe('Testing the login functionality-positive', () => {
  beforeEach(() => {
    cy.visit('https://events.dev.idliapps.com/login')
  })
  it('Testing the login page', () => {
    cy.fixture('login/login').then((data) => {
      data.positive.forEach((testData) => {
        cy.wrap(testData).then((data) => {
            cy.get('input[type="email"]').should('be.visible').type(data.email)
            cy.get('input[type="password"]').should('be.visible').type(data.password)
            cy.get('button[type="submit"]').click()
            cy.url().should("include","/dashboard")     
        })
      })
    })
  })
})
describe('Testing the login functionality-negative', () => {
  beforeEach(() => {
    cy.visit('https://events.dev.idliapps.com/login')
  })
  it('Testing the login page', () => {
    cy.fixture('login/login').then((data) => {
      data.negative.forEach((testData) => {
        cy.wrap(testData).then((data) => {
            cy.get('input[type="email"]').should('be.visible').type(data.email)
            cy.get('input[type="password"]').should('be.visible').type(data.password)
            cy.get('button[type="submit"]').click()
            cy.url().should("not.include","/dashboard")     
        })
      })
    })
  })
})
describe('Testing the login functionality-boundary', () => {
  beforeEach(() => {
    cy.visit('https://events.dev.idliapps.com/login')
  })
  it('Testing the login page', () => {
    cy.fixture('login/login').then((data) => {
      data.boundary.forEach((testData) => {
        cy.wrap(testData).then((data) => {
            cy.get('input[type="email"]').should('be.visible').type(data.email)
            cy.get('input[type="password"]').should('be.visible').type(data.password)
            cy.get('button[type="submit"]').click()
            cy.url().should("not.include","/dashboard")     
        })
      })
    })
  })
})