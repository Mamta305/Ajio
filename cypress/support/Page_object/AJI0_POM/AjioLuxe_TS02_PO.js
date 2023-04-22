class AjioLuxe_TS02_PO{

    varifyAjioLuxe_TC_18(){
        cy.get('[href="https://luxe.ajio.com"]').should('exist');
        cy.get('[href="https://luxe.ajio.com"]').should('be.visible');

    }

    validateAjioLuxe_TC_31(){
        cy.get('[href="https://luxe.ajio.com"]').click();
        cy.url().should('include','luxe');
        
    }
}

export default AjioLuxe_TS02_PO;