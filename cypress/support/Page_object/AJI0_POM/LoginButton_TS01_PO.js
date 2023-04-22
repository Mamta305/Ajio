///<reference types="cypress"/>
///<reference types="@cypress/xpath"/>

class LoginButton_TS01_PO{

    visitHomePage(){
        cy.visit("/");
    }

    varifyLoginButton_TC_01(){
        cy.get(".login-modal").should('exist');
        cy.get(".login-modal").should('be.visible');
        
    }

    validateLoginButton_TC_02(){
        cy.get(".login-modal").click();
        
        cy.get(".social-login").should('exist');
        cy.get(".modal-login-container").should('be.visible');
    }

}

export default LoginButton_TS01_PO; 