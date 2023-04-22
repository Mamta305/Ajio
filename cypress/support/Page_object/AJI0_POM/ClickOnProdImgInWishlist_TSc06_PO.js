// Validate the delete functionality of product  on the wishlist page

///<reference types='cypress-xpath'/>

class ClickOnProdImgInWishlist_TSc06_PO{
   
    clickOnProductImage(){ 
        // click on product Image.  
        cy.xpath("//a[@class='rilrtl-products-list__link']").invoke('removeAttr', 'target').click();
    }
   
    assertForWishlistPageAgain(){
        
        // assert the text which user search in the url. 
        cy.url().should("include", 'cap');
        // assert using title of the redirected page.
        cy.title().should('include', 'Caps & Hats');
        // assert using heading of the redirected page.
        cy.contains("Men Marvel Comics Snapback Cap").should('exist');
    }
}
export default ClickOnProdImgInWishlist_TSc06_PO;
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 