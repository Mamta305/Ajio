class LoginPage_TS01_PO{

    verifyTermsCondition_TC_03(){
        cy.get(".login-modal").click();
        cy.get(".btn-action-txt").contains('Terms and Conditions').should('exist');
        cy.get(".btn-action-txt").contains('Terms and Conditions').should('be.visible');
    }

    validateTermsCondition_TC_04(){
        cy.get(".login-modal").click();
        cy.get(".btn-action-txt").contains('Terms and Conditions').click();
        cy.url().should('include','termsAndCondition');

    }

    varifyGoogleButton_TC_05(){
        cy.get(".login-modal").click();
        cy.get(".google-login").should('exist');
        cy.get(".google-login").should('be.visible');
        
    }

    varifyFacebookButton_TC_05(){
        cy.get(".login-modal").click();
        cy.get(".fb-login").should('exist');
        cy.get(".fb-login").should('be.visible');
        
    }

    varifyContinueButton_TC_05(){
        cy.get(".login-modal").click();
        cy.get(".login-btn").should('exist');
        cy.get(".login-btn").should('be.visible');
        
    }
}

export default LoginPage_TS01_PO;