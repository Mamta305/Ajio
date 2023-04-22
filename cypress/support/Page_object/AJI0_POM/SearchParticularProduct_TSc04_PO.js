// Verification of input tag for searching products on the NavBar
///<reference types='cypress-xpath'/>
class SearchParticularProduct_TSc04_PO{
   
    assertTheInputSearchTag(){

       // assert the input tag by using .should method.
       cy.xpath("//input[@placeholder='Search AJIO']").should('have.attr', 'name', 'searchVal')

    }

    searchMarvelComics(){

        // by using xpath locator, search 'Marvel Comics' by .type method.
        cy.xpath('//input[@placeholder="Search AJIO"]').type("Marvel Comics{enter}");
        
        }
    
    assertTheRedirectedPage(){

           // assert the text which user search in the url. 
           cy.url().should("include", 'Marvel');
           // assert using title of the redirected page.
           cy.title().should('include', 'Marvel');
           // assert using heading of the redirected page.
           cy.contains("Marvel Comics").should('have.text', "Marvel Comics");
           }

    }
export default SearchParticularProduct_TSc04_PO;


