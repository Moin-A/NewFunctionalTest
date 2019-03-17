describe('Visual regression for elements in hotnews section', () => {
    beforeEach(() => {
    cy.viewport("macbook-15")
    })
    it('Take the screenshot of entire Elections section in prod env', () => {
    cy.visit("/news") 
    cy.get('#container').matchImageSnapshot('News-sectionpage',{coverage: "fullpage"})
    cy.get('li[class="sub-nav-section__contents__list"][data-reactid="158"]').click()
    cy.get('#container').matchImageSnapshot('News-subsectionpage',{coverage: "fullpage"})
    })
    it('compare the screenshot of the Electiond section with the one taken in beta env', () => {
    cy.visit(Cypress.env('thequintbeta')+'/news')
    cy.get('#container').matchImageSnapshot('News-sectionpage',{coverage: "fullpage"})
    cy.get('li[class="sub-nav-section__contents__list"][data-reactid="158"]').click()
    cy.get('#container').matchImageSnapshot('News-subsectionpage',{coverage: "fullpage"})
    })
    })