// Validate the delete functionality of product  on the wishlist page

///<reference types='cypress-xpath'/>

class DeleteFromWishlist_TSc06_Po{
   
    clickOnDeleteIcon(){ 
        // click on delete icon to remove product.  
        cy.get('.ic-delete').invoke('removeAttr', 'target').click();
         
     }
 
    assertToDeleteProduct(){
        // after delete product our cart is empty.
        cy.get('.empty-msg').should('exist');
    }
 
 
     }
 export default DeleteFromWishlist_TSc06_Po;
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 