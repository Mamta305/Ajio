import 'cypress-xpath';

class IndieSection_TS02_PO{

    varifyIndieSection_TC_12(){
        cy.xpath('//*[@title="INDIE"]').should('exist');
        cy.xpath('//*[@title="INDIE"]').should('be.visible');
    }

    validateIndieSection_TC_26(){
        cy.xpath('//*[@title="INDIE"]').click();
        cy.url().should('include','indie');
    }
}

export default IndieSection_TS02_PO;
