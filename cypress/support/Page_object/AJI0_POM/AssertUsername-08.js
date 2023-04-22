class UserName{
    AssertUserName(value){
    cy.get(".ignore-sentence-case").should("have.text",value);
    }
}
export default UserName;