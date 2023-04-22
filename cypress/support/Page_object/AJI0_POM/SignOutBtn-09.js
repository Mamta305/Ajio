class SignOutBtn{
    FindSignOutBtn(){
     cy.xpath("//a[text()='Sign Out']").should("exist");
    }
    ClickSignOutBtn(){
        cy.xpath("//a[text()='Sign Out']").click();
       }
}
export default SignOutBtn;