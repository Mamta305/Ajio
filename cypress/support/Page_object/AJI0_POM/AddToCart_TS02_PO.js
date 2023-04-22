class AddToCart_TS02_PO{
    varifyAddTOCArt_TC_19(){
        cy.get('.ic-cart ').should('exist');

        cy.get('.ic-cart ').should('be.visible');
    }

    validateAddTOCart_TC_33(){
        cy.get('.ic-cart ').click();

        cy.url().should('include','cart');
    }
}

export default AddToCart_TS02_PO;