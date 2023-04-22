// Verification of input tag for searching products on the NavBar
///<reference types='cypress-xpath'/>
class RedirectByDropdownSearch_TSc04_PO{
   
    pressEnterInInputTag(){

       // using class locator, find input tag and click on it.
       cy.get('.react-autosuggest__input').click(); 

    }

    selectFromDropdown(){

        // from frop down we can select product by usimg xpath
        cy.xpath('(//a[@class="search-suggestionList "])[2]').click({force: true});
        
        }
    
    assertToRedirectPage(){

           // assert the text which user search in the url. 
           cy.url().should("include", 'jackets',{ timeout: 10000 })
  
           }

    }
export default RedirectByDropdownSearch_TSc04_PO;


