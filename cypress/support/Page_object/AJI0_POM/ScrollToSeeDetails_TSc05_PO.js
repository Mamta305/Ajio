// Verification of input tag for searching products on the NavBar
///<reference types='cypress-xpath'/>
class ScrollToSeeDetails_TSc05_PO{
     
    scrollPage(){

        // scroll the page using scrollIntoView method
        cy.xpath('//h3[@class="prod-heading"]').scrollIntoView();
        
    }
    
    assertTheDetails(){

          // assert the Product details. 
          cy.get(".prod-list").then((detail)=>{

            const productCount = detail.find(".detail-list").first().text();
            expect(productCount).to.contain("Package contains: 1 cap");

            const madeBy = detail.find(".detail-list").eq(1).text();
            expect(madeBy).to.contain("Cotton");

            const code = detail.find(".detail-list").eq(2).text();
            expect(code).to.contain("Product Code: 465075481001");
            
          });
         

    }
     
     
    }
export default ScrollToSeeDetails_TSc05_PO;


