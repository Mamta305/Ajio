import 'cypress-xpath';

class PostLoginTest_TS02_PO{

    varifyMyAccount_TC_14(){
        cy.get('[href="/my-account/orders"]').should('exist');

        cy.get('[href="/my-account/orders"]').should('be.visible');
    }

    varifySignOut_TC_15(){
        cy.xpath('//a[contains(text(),"Sign Out")]').should('exist');

        cy.xpath('//a[contains(text(),"Sign Out")]').should('be.visible');
    }

    validateMyAccount_TC_28(){
        cy.get('[href="/my-account/orders"]').click();

        cy.url().should('include','my-account');
    }

    validateSignOut_TC_29(){
        cy.xpath('//a[contains(text(),"Sign Out")]').click({force:true});

        cy.url().should('eq','https://www.ajio.com/');
    }


}

export default  PostLoginTest_TS02_PO;