
            describe('Visual regression for elements in hotnews section', () => {
                beforeEach(() => {
                cy.viewport("macbook-15")
                })
                it('Take the screenshot of entire Elections section in prod env', () => {
                cy.visit("/me-the-change") 
                cy.get('#container').matchImageSnapshot('Me-the-change-section-page',{coverage: "fullpage"})
                
                })
                it('compare the screenshot of the Electiond section with the one taken in beta env', () => {
                cy.visit(Cypress.env('thequintbeta')+'/me-the-change')
                cy.get('#container').matchImageSnapshot('Me-the-change-section-page',{coverage: "fullpage"})
                
                
                })
                })
    




    
                
  

