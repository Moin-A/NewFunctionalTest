describe('e2e test for the quint', () => {
    beforeEach(() => {
    cy.viewport("macbook-15")
    })
    it('Verify user should get redirected to home page on clicking publisher logo.', () => {
        cy.visit('/elections')
        cy.get('a[href="/"][data-reactid="7"]').click()
        cy.get('header[class="header-section js-header"]').should("be.visible")
        cy.get('div[class="homepage-citizenq__headline"]').should("be.visible") 
        cy.url().should('eq','https://www.thequint.com/')
        
    })
    it('Verify whether a story page opens on clicking on title or image or headline of the story.',() => {
        cy.visit('/')
        cy.get('div#container > div > div:nth-of-type(3) > div > section > div > div > div > div > div > article:nth-of-type(2) > a > h3').invoke('text').then((text1) => {
        cy.get('div#container > div > div:nth-of-type(3) > div > section > div > div > div > div > div > article:nth-of-type(2) > a > h3').click({timeout:600000})
        cy.get("div#container > div > div:nth-of-type(3) > div > section > section:nth-of-type(2) > article > div:nth-of-type(2) > div > div > div > h1").invoke('text').then((text2) => {
              expect(text2).to.equal(text1)
            })
          })
        }) 
      })  