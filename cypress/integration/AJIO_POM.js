import VerifyInputTag_TSc04_PO from "../support/Page_object/AJI0_POM/VerifyInputTag_TSc04_PO";
import LandingPage_PO from "../support/Page_object/AJI0_POM/LandingPage_PO";
import ValidateInputValue_TSc04_PO from "../support/Page_object/AJI0_POM/ValidateInputValue_TSc04_PO";
import PseudowordsSearch_TSc04_PO from "../support/Page_object/AJI0_POM/PseudowordsSearch_TSc04_PO";
import SearchParticularProduct_TSc04_PO from "../support/Page_object/AJI0_POM/SearchParticularProduct_TSc04_PO";
import RedirectByDropdownSearch_TSc04_PO from "../support/Page_object/AJI0_POM/RedirectByDropdownSearch_TSc04_PO";
import FilterMenFromMarvelComic_TSc04_PO from "../support/Page_object/AJI0_POM/FilterMenFromMarvelComic_TSc04_PO";
import RedirectToSingleProductPage_Tsc05_PO from "../support/Page_object/AJI0_POM/RedirectToSingleProductPage_Tsc05_PO";
import ScrollToSeeDetails_TSc05_PO from "../support/Page_object/AJI0_POM/ScrollToSeeDetails_TSc05_PO";
import VerifyOtherProductInfo_TSc05_PO from "../support/Page_object/AJI0_POM/VerifyOtherProductInfo_TSc05_PO";
import VerifyPrice_TSc05_PO from "../support/Page_object/AJI0_POM/VerifyPrice_TSc05_PO";
import ValidateServiceFAQsLink_Tsc05_PO from "../support/Page_object/AJI0_POM/ValidateServiceFAQsLink_Tsc05_PO";
import VerifyButtons_TSc06_PO from "../support/Page_object/AJI0_POM/VerifyButtons_TSc06_PO";
import ValidateWishlistButton_TSc06_PO from "../support/Page_object/AJI0_POM/ValidateWishlistButton_TSc06_PO";
import ReturnsSection_TSc06_PO from "../support/Page_object/AJI0_POM/ReturnsSection_TSc06_PO";
import DeleteFromWishlist_TSc06_Po from "../support/Page_object/AJI0_POM/DeleteFromWishlist_TSc06_Po";
import ClickOnBagIconOnWishlist_TSc06_PO from "../support/Page_object/AJI0_POM/ClickOnBagIconOnWishlist_TSc06_PO";
import ClickOnProdImgInWishlist_TSc06_PO from "../support/Page_object/AJI0_POM/ClickOnProdImgInWishlist_TSc06_PO";

describe('Cypress Automation of AJIO e-commerce website', () => {
     
    // Object formation
    const homePage = new LandingPage_PO(); 
    const verifyInput = new VerifyInputTag_TSc04_PO();
    const validateInput = new ValidateInputValue_TSc04_PO(); 
    const pseudoword = new PseudowordsSearch_TSc04_PO();
    const redirectByDropdown = new RedirectByDropdownSearch_TSc04_PO();
    const searchParticularProduct = new SearchParticularProduct_TSc04_PO(); 
    const filterManFromCheckbox =  new FilterMenFromMarvelComic_TSc04_PO(); 
    const redirectToSingleProduct = new RedirectToSingleProductPage_Tsc05_PO();
    const scrollToSeeProductDetails = new ScrollToSeeDetails_TSc05_PO();
    const verifyOtherInfo = new VerifyOtherProductInfo_TSc05_PO(); 
    const verifyPrice = new VerifyPrice_TSc05_PO();
    const serviceFaqsLink = new ValidateServiceFAQsLink_Tsc05_PO();
    const verifyButton = new VerifyButtons_TSc06_PO();
    const validateWishlistBtn = new ValidateWishlistButton_TSc06_PO();
    const RETURNS= new ReturnsSection_TSc06_PO();
    const deleteFromWishlist = new DeleteFromWishlist_TSc06_Po();
    const bagIcon = new ClickOnBagIconOnWishlist_TSc06_PO(); 
    const clickOnImage = new ClickOnProdImgInWishlist_TSc06_PO();
    // using Cypress hook 
    beforeEach(()=>{ 
       homePage.visitLandingPage();
    })
    // using fixture files
    before(()=>{
       cy.fixture('datas.json').then((data)=>{
           globalThis.data = data;
       })
   })
    it('Verification of input tag ( TC-44 ) ', () => {
           verifyInput.inputTag;           
    });

    it("Validate the input tag ( TC-45 )",()=>{
           validateInput.inputValueAttr();
    });

    it('For any pseudowords, it will redirect to no product found page ( TC-46 )', () => {
     
        pseudoword.pseudowordSearch(data.pseudoWord);  
        pseudoword.assertionOfText;
        pseudoword.assertOfPseudoWordInUrl;

    });

    it.skip("After clicking on input Select any product from dropdown then user will redirect to that page ( TC-47 )", ()=>{
      
        redirectByDropdown.pressEnterInInputTag();
        redirectByDropdown.selectFromDropdown();
        redirectByDropdown.assertToRedirectPage();  
       
    })
    
    it("Search for the particular product which is 'Marvel Comics' ( TC-48 ) ", ()=>{

       searchParticularProduct.assertTheInputSearchTag();
       searchParticularProduct.searchMarvelComics();
       searchParticularProduct.assertTheRedirectedPage();

    })

    it("Filter for men on marvel comics page ( TC-49 )", ()=>{

       searchParticularProduct.searchMarvelComics();
       searchParticularProduct.assertTheRedirectedPage();
       filterManFromCheckbox.filterMan();
       filterManFromCheckbox.assertAfterFilterMan();   
    })

    it("Open the first product visible on the page ( TC-50 )", ()=>{

       searchParticularProduct.searchMarvelComics();
       filterManFromCheckbox.filterMan();
       filterManFromCheckbox.assertAfterFilterMan();
       redirectToSingleProduct.selectingTheFirstProduct();
       redirectToSingleProduct.assertTheCap();
    })
    
    it("Scroll to see product details  ( TC-51 )", ()=>{

        searchParticularProduct.searchMarvelComics();
        filterManFromCheckbox.filterMan();
        redirectToSingleProduct.selectingTheFirstProduct();
        redirectToSingleProduct.assertTheCap();
        scrollToSeeProductDetails.scrollPage();
        scrollToSeeProductDetails.assertTheDetails();

    })

    it("Veriy other information related to first product ( TC-52 )", ()=>{

        searchParticularProduct.searchMarvelComics();
        filterManFromCheckbox.filterMan();
        redirectToSingleProduct.selectingTheFirstProduct();
        scrollToSeeProductDetails.scrollPage();
        verifyOtherInfo.clickOnOtherInformation();
        verifyOtherInfo.assertOtherInformation();
        
    })
 
    it("Verify the price of product after discount is applied. ( TC-54 )", ()=>{
      
        searchParticularProduct.searchMarvelComics();
        searchParticularProduct.assertTheRedirectedPage();
        filterManFromCheckbox.filterMan();
        redirectToSingleProduct.selectingTheFirstProduct();
        verifyPrice.verifyPriceAfterDiscount();
    })
   
    it("Click on Service FAQs ( TC-55 ) " , ()=>{
    
        searchParticularProduct.searchMarvelComics();
        filterManFromCheckbox.filterMan();
        redirectToSingleProduct.selectingTheFirstProduct();
        serviceFaqsLink.clickOnServiceFAQsLink();
        serviceFaqsLink.assertServiceFAQsPage();

    })

    it("Verify the ADD TO BAG and SAVE TO WISHLIST button ( TC-56)", ()=>{
       
        searchParticularProduct.searchMarvelComics();
        filterManFromCheckbox.filterMan();
        verifyButton.verifyAddToBagButton();
        verifyButton.verifySaveToWishlistButton();

    })

   it("Click on SAVE TO WISHLIST button ( TC-57 )", ()=>{

    searchParticularProduct.searchMarvelComics();
    filterManFromCheckbox.filterMan();
    validateWishlistBtn.clickSaveToWishlistButton();
    validateWishlistBtn.loginToSwitchPage(data.number);
    validateWishlistBtn.moveToWishlistPage();
    validateWishlistBtn.verifyProductOnWishlistPage();
   })

   it("Click functionality of 'click here' button in the RETURNS section. ( TC-58 )", ()=>{
   
    searchParticularProduct.searchMarvelComics();
    filterManFromCheckbox.filterMan();
    redirectToSingleProduct.selectingTheFirstProduct();
    RETURNS.clickOnClickHere();
    RETURNS.assertReturnsPage();
   })
   
   it("Validate the click functionality of bag icon  on the wishlist page. ( TC-59 )", ()=>{
    
    searchParticularProduct.searchMarvelComics();
    filterManFromCheckbox.filterMan();
    redirectToSingleProduct.selectingTheFirstProduct();
    validateWishlistBtn.clickSaveToWishlistButton();
    validateWishlistBtn.loginToSwitchPage(data.number);
    validateWishlistBtn.moveToWishlistPage();
    deleteFromWishlist.clickOnDeleteIcon();
    deleteFromWishlist.assertToDeleteProduct() 
   })

   it("Validate the click functionality of bag icon  on the wishlist page. ( TC-60 )", ()=>{
    try{
    searchParticularProduct.searchMarvelComics();
    filterManFromCheckbox.filterMan();
    redirectToSingleProduct.selectingTheFirstProduct();
    validateWishlistBtn.clickSaveToWishlistButton();
    validateWishlistBtn.loginToSwitchPage(data.number);
    validateWishlistBtn.moveToWishlistPage();
    bagIcon.clickOnBagIcon();
      }
    catch (error) {
        expect(error.message).to.include('is not visible');
      }
   })

   it("Validate the click functionality of product image on the wishlist page. ( TC-61 )", ()=>{
    searchParticularProduct.searchMarvelComics();
    filterManFromCheckbox.filterMan();
    redirectToSingleProduct.selectingTheFirstProduct();
    validateWishlistBtn.clickSaveToWishlistButton();
    validateWishlistBtn.loginToSwitchPage(data.number);
    validateWishlistBtn.moveToWishlistPage();
    clickOnImage.clickOnProductImage();
    clickOnImage.assertForWishlistPageAgain();
   })
});

