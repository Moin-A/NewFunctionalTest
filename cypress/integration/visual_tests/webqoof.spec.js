describe('Visual regression for elements in hotnews section', () => {
    beforeEach(() => {
    cy.viewport("macbook-15")
    })
    it('Take the screenshot of entire Elections section in prod env', () => {
    cy.visit("/webqoof") 
    cy.get('#container').matchImageSnapshot('Webqoof-pic',{coverage: "fullpage"})
   
    })
    it('compare the screenshot of the Electiond section with the one taken in beta env', () => {
    cy.visit(Cypress.env('thequintbeta')+'/webqoof')
    cy.get('#container').matchImageSnapshot('Webqoof-pic',{coverage: "fullpage"})
   
    })
    })