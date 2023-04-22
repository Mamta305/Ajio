class Wishlist_TS02_PO{
    varifyWishlist_TC_20(){
        cy.get('[alt="wishlistIcon"]').should('exist');

        cy.get('[alt="wishlistIcon"]').should('be.visible');
    }

    validateWishlist_TC_32(){
        cy.get('[alt="wishlistIcon"]').click();
        
        cy.get('[data-ga-event-action="Welcome to AJIO "]').should('be.visible');
        cy.wait(15000);
        cy.get(".login-btn").click();
        cy.wait(20000);
        cy.get('[value="START SHOPPING"]').click();

        cy.get('[alt="wishlistIcon"]').click();
        cy.url().should('include','wishlist');
    }
}

export default Wishlist_TS02_PO;
