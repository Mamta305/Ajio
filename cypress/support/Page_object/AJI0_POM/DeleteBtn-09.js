class DeleteBtn{
    FindDeleteBtn(){
        cy.xpath("//div[@class='delete-btn']").should("be.visible");
    }
    ClickDeleteBtn(){
        cy.xpath("(//div[@class='delete-btn'])[1]").click();
    }
    CardDelete(){
        cy.xpath("(//div[@class='delete-btn'])[2]").click();
    }

}
export default DeleteBtn;