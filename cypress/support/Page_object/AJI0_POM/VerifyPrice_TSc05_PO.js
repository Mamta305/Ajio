// Verify the price of product after discount is applied.

///<reference types='cypress-xpath'/>

class VerifyPrice_TSc05_PO{
     
    verifyPriceAfterDiscount(){

        // scroll the page using scrollIntoView method

        cy.get(".prod-price-section ").then((detail)=>{
            // by selling price
            const sp = detail.find(".prod-sp").eq(0).text();
            expect(sp).to.contain("699");
            // by discount
            const discount = detail.find(".prod-discnt").first().text();
            expect(discount).to.contain("30% off");
            // by cost price
            const cp = detail.find(".prod-price-sec").eq(2).text();
            expect(detail).to.contain("999");
            
          });

        cy.xpath('//div[@class="prod-price-section "]').then((price)=>{
           const sp = +price.find(".prod-sp").text().match(/\d+/)[0];
           const cp = +price.find(".prod-cp").text().match(/\d+/)[0];
           const discount = +price.find(".prod-discnt").text().match(/\d+/)[0];
           if(cp*(discount/100)==sp){
             cy.log("price verified");
           }else{
             cy.log("Price not verified")
           }
        });
      }
    }

export default VerifyPrice_TSc05_PO;














