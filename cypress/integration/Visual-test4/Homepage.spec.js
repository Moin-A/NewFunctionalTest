                describe('Visual regression for elements in homepage', () => {
                beforeEach(() => {
                cy.viewport("macbook-15")
                })
                it('Take the screenshots of the entire Homepage of Thequint beta env', () => {       
                    cy.visit('/')
                cy.get("#container").matchImageSnapshot('Homepage',{coverage: "fullpage"})
                })
                it('Take the screenshots of the entire Homepage of Thequint beta env', () => {   
                cy.visit(Cypress.env("thequintbeta"))
                cy.get("#container").matchImageSnapshot('Homepage',{coverage: "fullpage2"})
                })
                })
      
        
            
    
    




    
 
  

