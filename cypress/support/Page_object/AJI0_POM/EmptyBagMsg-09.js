class EmptyBagMsg{
AssertEmptyBag(){
    cy.xpath("//p[@class='empty-msg']").should("have.text","Your Shopping Bag is Empty!!");
}
}
export default EmptyBagMsg;