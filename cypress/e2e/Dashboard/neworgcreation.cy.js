describe('Testing dashboard organisation creation - Positive', () => {
  it('Testing positive organisation data', () => {
    cy.fixture('dashboard/create_org').then((data) => {
      data.positive.forEach((testData) => {
        cy.login()
        cy.visit('https://events.dev.idliapps.com/dashboard')
        cy.contains('a', 'New Organisation').should('be.visible').click()
        cy.url().should('include', '/org/new')
        cy.get('input[name="name"]').should('be.visible').clear().type(testData.org_name)
        cy.get('input[name="slug"]').should('be.visible').clear().type(testData.url)
        cy.get('textarea[name="description"]').should('be.visible').clear().type(testData.des)
        cy.get('input[name="logoUrl"]').should('be.visible').clear().type(testData.logo_url)
        cy.contains('button[type="submit"]', 'Create organisation').should('be.visible').click()  
      })
    })
  })
})
describe('Testing dashboard organisation creation - negative', () => {
  it('Testing negative organisation data', () => {
    cy.fixture('dashboard/create_org').then((data) => {
      data.negative.forEach((testData) => {
        cy.login()
        cy.visit('https://events.dev.idliapps.com/dashboard')
        cy.contains('a', 'New Organisation').should('be.visible').click()
        cy.url().should('include', '/org/new')
        cy.get('input[name="name"]').should('be.visible').clear().type(testData.org_name)
        cy.get('input[name="slug"]').should('be.visible').clear().type(testData.url)
        cy.get('textarea[name="description"]').should('be.visible').clear().type(testData.des)
        cy.get('input[name="logoUrl"]').should('be.visible').clear().type(testData.logo_url)
        cy.contains('button[type="submit"]', 'Create organisation').should('be.disabled')
      })
    })
  })
})
describe.only('Testing dashboard organisation creation - boundary', () => {
  it('Testing boundary organisation data', () => {
    cy.fixture('dashboard/create_org').then((data) => {
      data.boundary.forEach((testData) => {
        cy.login()
        cy.visit('https://events.dev.idliapps.com/dashboard')
        cy.contains('a', 'New Organisation').should('be.visible').click()
        cy.url().should('include', '/org/new')
        cy.get('input[name="name"]').should('be.visible').clear().type(testData.org_name)
        cy.get('input[name="slug"]').should('be.visible').clear().type(testData.url)
        cy.get('textarea[name="description"]').should('be.visible').clear().type(testData.des)
        cy.get('input[name="logoUrl"]').should('be.visible').clear().type(testData.logo_url)
        cy.contains('button[type="submit"]', 'Create organisation').should('be.disabled')
      })
    })
  })
})
