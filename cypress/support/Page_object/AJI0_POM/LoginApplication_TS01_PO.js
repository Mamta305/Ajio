///<reference types='@cypress/xpath'/>

class LoginApplication_TS01_PO{

   loginApp_TC_07(){
    cy.get(".login-modal").click();
    cy.wait(20000);
    cy.get(".login-btn").click();
    cy.wait(20000);
    cy.get('[value="START SHOPPING"]').click();

    
   }
}

export default LoginApplication_TS01_PO;