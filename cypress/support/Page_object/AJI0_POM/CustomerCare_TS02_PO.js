class CustomerCare_TS02_PO{
    varifyCutomerCare_TC_16(){
        cy.get('[href="/selfcare"]').should('exist');
        cy.get('[href="/selfcare"]').should('be.visible');
    }

    validateCustomerCare_TC_30(){
        cy.get('[href="/selfcare"]').click();
        cy.url().should('include','selfcare');
        
    }
}

export default CustomerCare_TS02_PO;