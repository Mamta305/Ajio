// Verify the ADD TO BAG and SAVE TO WISHLIST button

///<reference types='cypress-xpath'/>

class VerifyButtons_TSc06_PO{
   
    verifyAddToBagButton(){

       // assert the add to bag button by .should method.
       cy.xpath('//div[@class="pdp-addtocart-button"]').should('exist');
       cy.xpath('//div[@class="pdp-addtocart-button"]').should('have.text', 'ADD TO BAG');


    }

    verifySaveToWishlistButton(){ 

        // assert the save to wishlist button by .should method.
        cy.xpath('//div[@class="btn-gray"]').should('exist');
        cy.xpath('//div[@class="btn-gray"]').should('have.text', 'SAVE TO WISHLIST');
 
    }

    }
export default VerifyButtons_TSc06_PO;


