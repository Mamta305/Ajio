import 'cypress-xpath';

class KidsSection_TS02_PO{

    varifyKidsSection_TC_11(){
        cy.xpath('//*[@title="KIDS"]').should('exist');
        cy.xpath('//*[@title="KIDS"]').should('be.visible');
    }

    validateKidsSection_TC_25(){
        cy.xpath('//*[@title="KIDS"]').click();
        cy.url().should('include','kids');
    }
}

export default KidsSection_TS02_PO;