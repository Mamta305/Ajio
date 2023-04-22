// Veriy other information related to first product

///<reference types='cypress-xpath'/>

class VerifyOtherProductInfo_TSc05_PO{
     
    clickOnOtherInformation(){

        // scroll the page using scrollIntoView method
        cy.xpath('//div[@class="other-info-toggle"]').click();
        
    }
    
    assertOtherInformation(){

          // assert the Product details. 

          cy.get(".prod-list").then((detail)=>{
            // by price
            const price = detail.find(".mandatory-list").eq(0).text();
            expect(price).to.contain("MRP");
            // by quantity
            const quantity = detail.find(".mandatory-list").eq(1).text();
            expect(quantity).to.contain("Net Qty");
            // by quantity
            const sellBy = detail.find(".mandatory-list").eq(2).text();
            expect(sellBy).to.contain("Marketed By");
            // by manufacturer by
            const madeBy = detail.find(".mandatory-list").eq(3).text();
            expect(madeBy).to.contain("Manufactured By");
            // by country
            const country = detail.find(".mandatory-list").eq(4).text();
            expect(country).to.contain("Country Of Origin");
            
          });
      }
  }

export default VerifyOtherProductInfo_TSc05_PO;


