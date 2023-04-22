// Verification of input tag for searching products on the NavBar

class VerifyInputTag_TSc04_PO{

     inputTag(){
        // get the input using xpath locator and assert by should 
        cy.xpath("input[@placeholder='Search AJIO']").should('be.visible');
        // Assert the name attribute
        cy.xpath("input[@placeholder='Search AJIO']").should('have.attr', 'name', 'searchVal').then(($el, index, $list)=>{
        // Retrieve the value attribute of the input tag
        const inputValue = $el.attr('value');
        // Assert that the value is empty at the starting
        expect(inputValue).to.be.empty;
        cy.log("Input tag is verified");
        })
     }
  }
export default VerifyInputTag_TSc04_PO;