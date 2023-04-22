// Click on SAVE TO WISHLIST button

///<reference types='cypress-xpath'/>

class ReturnsSection_TSc06_PO{
   
    clickOnClickHere(){ 
         
        cy.xpath('(//a[@href="https://www.ajio.com/return-refund-policy"])[1]').invoke('removeAttr', 'target').click({force: true});
         
     }
 
     assertReturnsPage(){

          // assert the text which user search in the url. 
          cy.url().should("include", 'return-refund-policy');
          // assert using title of the redirected page.
          cy.title().should('include', 'Returns & Refunds');
          // assert using heading of the redirected page.
          cy.contains("Returns and Refunds Policy").should('exist');

     }
 
 
     }
 export default ReturnsSection_TSc06_PO;
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 