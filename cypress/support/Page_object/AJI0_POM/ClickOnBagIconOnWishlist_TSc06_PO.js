// Validate the delete functionality of product  on the wishlist page

///<reference types='cypress-xpath'/>

class ClickOnBagIconOnWishlist_TSc06_PO{
   
    clickOnBagIcon(){ 
        // click on Bag icon.  
        cy.get('.wishlist-card-bag').click();
      
    }
    clickOnCartBtn(){ 
       // click on cart button to add product.  
       cy.xpath('//div[@class="ic-cart "]').click({force: true}); 
      
       // cy.get('.mini-cart-btn').click({force:true});
       cy.wait(4000);
    }
    // assertForRedirectCartPage(){
    //     // for confirmation of cart page.
    //  //   cy.url().should('include', 'cart');

    //     // for confirmation of same product by using product title.
    //  //   cy.contains('Free Authority - Men Marvel Comics Snapback Cap').should('exist');
    // }
  }

 export default ClickOnBagIconOnWishlist_TSc06_PO;
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 