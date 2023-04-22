// Verification of input tag for searching products on the NavBar

class ValidateInputValue_TSc04_PO{

    inputValueAttr(){
       // get the input using xpath locator and after click on input, input should be focused  
       cy.xpath("//input[@placeholder='Search AJIO']").click().should('have.focus');
       // type some text in the input tag
       cy.xpath("//input[@placeholder='Search AJIO']").type("inputAttrValueShouldChange");
       // Assert the name attribute

       cy.xpath("//input[@placeholder='Search AJIO']").should('have.attr', 'name', 'searchVal').then(($el, index, $list)=>{
       // Retrieve the value attribute of the input tag
       const inputValue = $el.attr('value');
       // Assert that the value is empty at the starting
       expect(inputValue).to.not.be.empty;
       if(inputValue=="inputAttrValueShouldChange"){
          console.log("User can type in the input tag");
       }else{
        console.log("User can't type in the input tag");
          }
       })
    }
 }
export default ValidateInputValue_TSc04_PO;