// Click on SAVE TO WISHLIST button

///<reference types='cypress-xpath'/>

class ValidateWishlistButton_TSc06_PO{
   
   clickSaveToWishlistButton(){ 

         cy.xpath('//div[@class="btn-gray"]').click();
         cy.xpath('//div[@class="btn-gray"]').should('have.text', 'SAVE TO WISHLIST');
    }

    loginToSwitchPage(num){
    
        cy.xpath("//input[@name='username']").type(num);
        cy.xpath("//input[@type='submit']").click();
        cy.wait(16000);
        cy.xpath('//input[@value="START SHOPPING"]').click();
        cy.wait(10000)
    }

    moveToWishlistPage(){

        cy.xpath('//img[@alt="wishlistIcon"]').click();
    }

    verifyProductOnWishlistPage(){

        cy.xpath('//div[@class="nameCls"]').should('have.text', 'Men Marvel Comics Snapback Cap');
    }
    

    }
export default ValidateWishlistButton_TSc06_PO;





















