
            describe('Visual regression for elements in hotnews section', () => {
                beforeEach(() => {
                cy.viewport("macbook-15")
              
                
                
                })
                it('Take the screenshot of entire hot-news section in prod env', () => {
                   
                cy.visit("/news/latest-news-headlines-and-breaking-news-today-16-july") 
                //cy.get('div[class="story-article__event__blocks"]').matchImageSnapshot('Hot-news',{coverage: 'fullpage'})
                
                cy.get('article[class="story-article ctg-news"]').matchImageSnapshot('Live-blog-story-page',{threshold:0.1,thresholdtype:'percent'})
                //cy.get('section[class="story-article__event"]').matchImageSnapshot('Hot-news',{coverage: 'fullpage'})
                })
               
                it('compare the screenshot of the hotnews section with the one taken in beta env', () => {
                    
                cy.visit(Cypress.env('thequintbeta')+'/news/latest-news-headlines-and-breaking-news-today-16-july')
                cy.get('article[class="story-article ctg-news"]').matchImageSnapshot('Live-blog-story-page',{threshold:0.1,thresholdtype:'percent'})
                })
                })
    




    
                
  

