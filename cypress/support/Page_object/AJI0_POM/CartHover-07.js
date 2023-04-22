class CartHover{
    CartHovercard(){
     cy.get(".minicart").should("exist");
    }
    ProceedCheckOutBtn(){
        cy.get(".cart-block-bag").children("div").should("have.class","minicart-btn-blk");
    }
    ClickProceedCheckOutBtn(){
        cy.get(".cart-block-bag").click();
    }
}
export default CartHover;