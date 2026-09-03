describe("Testing the forgot password page",()=>{
    it("Testing the forgot password page - positive-existing email",()=>{
        cy.fixture("login/forgotpass").then((data)=>{
          data.positive.forEach((testData)=>{ 
            cy.wrap(testData).then((data)=>{
            cy.visit('https://events.dev.idliapps.com/login')
            cy.contains('Forgot password?').click()
            cy.intercept("POST","https://events.dev.idliapps.com/reset-password").as("resetpassword")
            cy.get('input[type="email"]').should('be.visible').type(data.email)
            cy.get('button[type="submit"]').should('be.visible').click()
            cy.wait("@resetpassword").then((interception)=>{
                expect(interception.response.statusCode).to.eq(200)
                const requestBody = JSON.parse(interception.request.body)
                expect(requestBody[0].email).to.eq(data.email)
                expect(interception.response.body).to.include('"sent":true')
            cy.contains("If an account exists with that email, we've sent a password reset link. Check your inbox.").should("be.visible")    
            })
            })
          })
        })
    })
})

describe.only("Testing the forgot password page", () => {

  it("Testing the forgot password page - negative", () => {

    cy.fixture("login/forgotpass").then((data) => {

      data.negative_browser.forEach((testData) => {

        cy.wrap(testData).then((data) => {

          cy.visit("https://events.dev.idliapps.com/login")

          cy.contains("Forgot password?").click()

          const emailInput = cy.get('input[type="email"]')

          emailInput.should("be.visible")

          // Type only when email has a value
          if (data.email !== "") {
            emailInput.type(data.email)
          }

          cy.get('button[type="submit"]')
            .should("be.visible")
            .click()

          // Validate the field
         emailInput.then(($input) => {
  expect($input[0].checkValidity()).to.be.false
})

        })
      })
    })
  })
})