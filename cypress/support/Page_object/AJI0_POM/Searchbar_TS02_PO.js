class Searchbar_TS02_PO{
    varifySearchbar_TC_21(){
        cy.get('[placeholder="Search AJIO"]').should('exist');

        cy.get('[placeholder="Search AJIO"]').should('be.visible');
    }

    validateSearchbar_TC_34(){
        cy.get('[placeholder="Search AJIO"]').type("Shirts{Enter}")
        cy.url().should('include','shirts');

    }
}

export default Searchbar_TS02_PO;