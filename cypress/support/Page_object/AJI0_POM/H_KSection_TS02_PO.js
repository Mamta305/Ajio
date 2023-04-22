import 'cypress-xpath';
class H_KSection_TS02_PO{

    varifyH_KSection_TC_13(){
        cy.xpath('//*[@title="HOME AND KITCHEN"]').should('exist');
        cy.xpath('//*[@title="HOME AND KITCHEN"]').should('be.visible');
    }

    validateH_KSection_TC_27(){
        cy.xpath('//*[@title="HOME AND KITCHEN"]').click();
        cy.url().should('include','8312');
    }
}

export default H_KSection_TS02_PO;