class ProceedButton{
    AssertProceedButton(){
        cy.xpath("//button[@class='rilrtl-button button shipping-button']").should("have.text","Proceed to shipping");
    }
    ClickOnProceedBtn(){
        cy.xpath("//button[@class='rilrtl-button button shipping-button']").click();
    }
}
export default ProceedButton;