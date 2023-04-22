///<reference types='cypress'/>
///<reference types='@cypress/xpath'/>
import 'cypress-xpath';

class MenSection_TS02_PO{
    varifyMenSection_TC_09(){
        cy.xpath('//*[@title="MEN"]').should('exist');
        cy.xpath('//*[@title="MEN"]').should('be.visible');
    }

    validateMenSection_TC_23(){
        cy.xpath('//*[@title="MEN"]').click();
        cy.url().should('include','men');
    }

    hoverMenSection_TC_35(){
        cy.xpath('//*[@title="MEN"]').trigger('mouseover');

    }
}
export default MenSection_TS02_PO;