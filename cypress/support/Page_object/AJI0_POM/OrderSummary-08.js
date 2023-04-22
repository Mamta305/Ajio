class OrderSummaryPage{
    AssertProceedPayBtn(){
        cy.get(".payment-btn ").should("have.text","Proceed to Payment");
    }
    ProceedPayBtn(){
        cy.get(".payment-btn ").click();
    }
    AssertOrderSummary(){
        cy.get(".order-summary-container").should("be.visible");
    }
}

export default OrderSummaryPage;