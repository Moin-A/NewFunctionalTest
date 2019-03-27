describe('Visual regression for elements in neon  section', () => {
    beforeEach(() => {
    cy.viewport("macbook-15")
    })
    it('Take the screenshot of entire neon section in prod env', () => {
    cy.visit(Cypress.env('theqiuint')+'/neon') 
    cy.get('#container').matchImageSnapshot('Neon-sectionpage',{coverage: "fullpage"})
    cy.get('li[class="sub-nav-section__contents__list"][data-reactid="158"]').click()
    cy.get('#container').matchImageSnapshot('Neon-subsectionpage',{coverage: "fullpage"})
    })
    it('compare the screenshot of the neon section with the one taken in beta env', () => {
    cy.visit(Cypress.env('thequintbeta')+'/neon')
    cy.get('#container').matchImageSnapshot('Neon-sectionpage',{coverage: "fullpage"})
    cy.get('li[class="sub-nav-section__contents__list"][data-reactid="158"]').click()
    cy.get('#container').matchImageSnapshot('Neon-subsectionpage',{coverage: "fullpage"})
    })
    })