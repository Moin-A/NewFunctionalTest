
            describe('Visual regression for elements in Live-blog section', () => {
                beforeEach(() => {
                cy.viewport("macbook-15")
              
            })
            it('Take the screenshot of entire hot-news section in prod env', () => {
            cy.visit(Cypress.env("thequint")+'/topic/live-blog') 
            cy.get('div#container > div > div:nth-of-type(3) > section > div > div > div:nth-of-type(1)').click()  
            cy.get('div[class="story-article__hero"]').matchImageSnapshot('Hot-news1',{coverage:'fullpage'})
            cy.get('div[class="story-article__event"]').matchImageSnapshot('Hot-news2',{coverage:'fullpage'})
            cy.get('div[class="liveblog__body-top"]').matchImageSnapshot('Hot-news3',{coverage:'fullpage'})
            //cy.get('section[class="story-article__event"]').matchImageSnapshot('Hot-news',{coverage: 'fullpage'})
            })
            it('compare the screenshot of the Live-blog section with the one taken in beta env', () => {
            cy.visit(Cypress.env('thequintbeta')+'/topic/live-blog')  
            cy.get('div#container > div > div:nth-of-type(3) > section > div > div > div:nth-of-type(1)').click()      
            cy.get('div[class="story-article__hero"]').matchImageSnapshot('Hot-news1',{coverage:'fullpage'})
            cy.get('div[class="story-article__event"]').matchImageSnapshot('Hot-news2',{coverage:'fullpage'})
            cy.get('div[class="liveblog__body-top"]').matchImageSnapshot('Hot-news3',{coverage:'fullpage'})
            })
            })      
              
    




    
                
  

