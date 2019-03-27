describe('Visual regression for elements in webqoof section', () => {
    beforeEach(() => {
    cy.viewport("macbook-15")
    })
    it('Take the screenshot of entire webqoof section in prod env', () => {
    cy.visit("/webqoof")
    cy.get('#container').matchImageSnapshot('Webqoof-pic',{coverage: "fullpage"})
    })
    it('compare the screenshot of the webqoof section with the one taken in beta env', () => {
    cy.visit(Cypress.env('thequintbeta')+'/webqoof')
    cy.get('#container').matchImageSnapshot('Webqoof-pic',{coverage: "fullpage"})
    })
    })