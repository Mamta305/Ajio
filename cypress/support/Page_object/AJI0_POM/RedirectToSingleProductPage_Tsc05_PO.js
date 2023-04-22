// Verification of input tag for searching products on the NavBar
///<reference types='cypress-xpath'/>
class RedirectToSingleProductPage_Tsc05_PO{
     
    selectingTheFirstProduct(){

        // window handle by using invoke method
        cy.xpath("(//a[@class='rilrtl-products-list__link'])[1]").invoke('removeAttr', 'target').click({force: true});
        
    }
    
    assertTheCap(){

          // assert the text which user search in the url. 
          cy.url().should("include", 'cap');
          // assert using title of the redirected page.
          cy.title().should('include', 'Caps & Hats');
          // assert using heading of the redirected page.
          cy.contains("Men Marvel Comics Snapback Cap").should('exist');

    }
     
     
    }
export default RedirectToSingleProductPage_Tsc05_PO;


