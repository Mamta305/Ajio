import 'cypress-xpath';
class WomenSection_TS02_PO{

    varifyWomenSection_TC_10(){
        cy.xpath('//*[@title="WOMEN"]').should('exist');
        cy.xpath('//*[@title="WOMEN"]').should('be.visible');
    }

    validateWomenSection_TC_24(){
        cy.xpath('//*[@title="WOMEN"]').click();
        cy.url().should('include','women');
    }
}

export default WomenSection_TS02_PO;