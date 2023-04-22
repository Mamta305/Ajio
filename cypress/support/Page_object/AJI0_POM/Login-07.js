
class Login{
    login(){

        // cy.get(".login-modal").click();
        cy.wait(20000)
        cy.get(".login-btn").click();
        cy.wait(30000);
        cy.get("input[value='START SHOPPING']").click();
        
    }
}
export default Login;