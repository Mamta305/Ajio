class GoToBag{
    AssertGoToBagBtn(){
        cy.get(".btn-cart ").children("span").should("have.text","GO TO BAG");
    }
    ClicKOnGoToBagBtn(){
        cy.get(".btn-cart ").click();
    }
    RedirectToCart(){
        cy.url().should("include","cart"); 
    }
}
export default GoToBag;