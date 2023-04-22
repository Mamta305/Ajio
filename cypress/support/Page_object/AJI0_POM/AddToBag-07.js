class AddToBag{
    AssertAddBtn(){
        cy.get(".btn-gold").children("span").should("have.class","ic-pdp-add-cart");
    }
    ClickBagButton(){
        cy.get(".btn-gold").click();
    }
}
export default AddToBag;