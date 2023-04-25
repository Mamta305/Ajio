// TSc 01 - TSc 03
//import { it } from "mocha";
import "cypress-xpath";
import AddToCart_TS02_PO from "../support/Page_object/AJI0_POM/AddToCart_TS02_PO";
import AjioLuxe_TS02_PO from "../support/Page_object/AJI0_POM/AjioLuxe_TS02_PO";
import CarouselSection_TS03_PO from "../support/Page_object/AJI0_POM/CarouselSection_TS03_PO";
import CustomerCare_TS02_PO from "../support/Page_object/AJI0_POM/CustomerCare_TS02_PO";
import H_KSection_TS02_PO from "../support/Page_object/AJI0_POM/H_KSection_TS02_PO";
import IndieSection_TS02_PO from "../support/Page_object/AJI0_POM/IndieSection_TS02_PO";
import KidsSection_TS02_PO from "../support/Page_object/AJI0_POM/KidsSection_TS02_PO";
import LogAllCategories_TS03_PO from "../support/Page_object/AJI0_POM/LogAllCategories_TS03_PO";
import LoginApplication_TS01_PO from "../support/Page_object/AJI0_POM/LoginApplication_TS01_PO";
import LoginButton_TS01_PO from "../support/Page_object/AJI0_POM/LoginButton_TS01_PO";
import LoginPage_TS01_PO from "../support/Page_object/AJI0_POM/LoginPage_TS01_PO";
import MenSection_TS02_PO from "../support/Page_object/AJI0_POM/MenSection_TS02_PO";
import MensPageCategories_TS03_PO from "../support/Page_object/AJI0_POM/MensPageCategories_TS03_PO";
import PostLoginTest_TS02_PO from "../support/Page_object/AJI0_POM/PostLoginTest_TS02_PO";
import ProductLogo_TS02_PO from "../support/Page_object/AJI0_POM/ProductLogo_TS02_PO";
import Searchbar_TS02_PO from "../support/Page_object/AJI0_POM/Searchbar_TS02_PO";
import Wishlist_TS02_PO from "../support/Page_object/AJI0_POM/Wishlist_TS02_PO";
import WomenSection_TS02_PO from "../support/Page_object/AJI0_POM/WomenSection_TS02_PO";

// TSc 04 - TSc 06
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

// TSc 07 - TSc 09
import Login from "../support/Page_object/AJI0_POM/Login-07";
import SearchVal from "../support/Page_object/AJI0_POM/Search-07";
import ProductPage from "../support/Page_object/AJI0_POM/Product-Page07";
import SelectSize from "../support/Page_object/AJI0_POM/SelectSize-07";
import AddToBag from "../support/Page_object/AJI0_POM/AddToBag-07";
import CartHover from "../support/Page_object/AJI0_POM/CartHover-07";
import GoToBag from "../support/Page_object/AJI0_POM/GoToBag-07";
import CartPage from "../support/Page_object/AJI0_POM/CartPage-08";
import ProceedButton from "../support/Page_object/AJI0_POM/ProceedButton-08";
import UserName from "../support/Page_object/AJI0_POM/AssertUsername-08";
import ProceedShipping from "../support/Page_object/AJI0_POM/ProceedShippingBtn-08";
import OrderSummaryPage from "../support/Page_object/AJI0_POM/OrderSummary-08";
import FindIcon from "../support/Page_object/AJI0_POM/FindIconBtn-09";
import DeleteBtn from "../support/Page_object/AJI0_POM/DeleteBtn-09";
import EmptyBagMsg from "../support/Page_object/AJI0_POM/EmptyBagMsg-09";
import SignOutBtn from "../support/Page_object/AJI0_POM/SignOutBtn-09";


describe('Cypress Automation of AJIO e-commerce website', () => {

    // Object formation
    const loginButton_TS01_PO = new LoginButton_TS01_PO();
    const loginPage_TS01_PO = new LoginPage_TS01_PO();
    const loginApplication_TS01_PO = new LoginApplication_TS01_PO();
    const productLogo_TS02_PO = new ProductLogo_TS02_PO();
    const menSection_TS02_PO = new MenSection_TS02_PO();
    const womenSection_TS02_PO = new WomenSection_TS02_PO();
    const kidsSection_TS02_PO = new KidsSection_TS02_PO();
    const indieSection_TS02_PO = new IndieSection_TS02_PO();
    const h_kSection_TS02_PO = new H_KSection_TS02_PO();
    const customerCare_TS02_PO = new CustomerCare_TS02_PO();
    const ajioLuxe_TS02_PO = new AjioLuxe_TS02_PO();
    const addToCart_TS02_PO = new AddToCart_TS02_PO();
    const wishlist_TS02_PO = new Wishlist_TS02_PO();
    const postLoginTest_TS02_PO = new PostLoginTest_TS02_PO();
    const searchbar_TS02_PO = new Searchbar_TS02_PO();
    const carouselSection_TS03_PO = new CarouselSection_TS03_PO();
    const menPageCategories_TS03_PO = new MensPageCategories_TS03_PO();
    const logAllCategories_TS03_PO = new LogAllCategories_TS03_PO();

    const homePage = new LandingPage_PO();
    const verifyInput = new VerifyInputTag_TSc04_PO();
    const validateInput = new ValidateInputValue_TSc04_PO();
    const pseudoword = new PseudowordsSearch_TSc04_PO();
    const redirectByDropdown = new RedirectByDropdownSearch_TSc04_PO();
    const searchParticularProduct = new SearchParticularProduct_TSc04_PO();
    const filterManFromCheckbox = new FilterMenFromMarvelComic_TSc04_PO();
    const redirectToSingleProduct = new RedirectToSingleProductPage_Tsc05_PO();
    const scrollToSeeProductDetails = new ScrollToSeeDetails_TSc05_PO();
    const verifyOtherInfo = new VerifyOtherProductInfo_TSc05_PO();
    const verifyPrice = new VerifyPrice_TSc05_PO();
    const serviceFaqsLink = new ValidateServiceFAQsLink_Tsc05_PO();
    const verifyButton = new VerifyButtons_TSc06_PO();
    const validateWishlistBtn = new ValidateWishlistButton_TSc06_PO();
    const RETURNS = new ReturnsSection_TSc06_PO();
    const deleteFromWishlist = new DeleteFromWishlist_TSc06_Po();
    const bagIcon = new ClickOnBagIconOnWishlist_TSc06_PO();
    const clickOnImage = new ClickOnProdImgInWishlist_TSc06_PO();

    const Login_PO = new Login();
    const Search_PO = new SearchVal();
    const Productpage_PO = new ProductPage();
    const SelectSize_PO = new SelectSize();
    const AddToBag_PO = new AddToBag();
    const CartHover_PO = new CartHover();
    const GoToBag_PO = new GoToBag();
    const CartPage_PO = new CartPage();
    const ProceedButton_PO = new ProceedButton();
    const UserName_PO = new UserName();
    const ProceedShipping_PO = new ProceedShipping();
    const OrderSummary_PO = new OrderSummaryPage();
    const FindLogo_PO = new FindIcon();
    const DeleteBtn_PO = new DeleteBtn();
    const EmptyMsg_PO = new EmptyBagMsg();
    const SignOut_PO = new SignOutBtn();


    before(() => {
        cy.fixture("example").then((data) => {
            globalThis.data = data;
        })

        cy.fixture('datas.json').then((data) => {
            globalThis.data = data;
        })

    })
    beforeEach(() => {
        cy.viewport(1308, 800);
        cy.visit("/");
        homePage.visitLandingPage();
        loginButton_TS01_PO.visitHomePage();


    })
    //PRATIBHAV
    it("Varyfy and Validate the Login Button", () => {

        loginButton_TS01_PO.varifyLoginButton_TC_01();
        loginButton_TS01_PO.validateLoginButton_TC_02();

    });

    it('Varyfy and Validate the Terms&Condition', () => {

        loginPage_TS01_PO.verifyTermsCondition_TC_03();

        loginButton_TS01_PO.visitHomePage();
        loginPage_TS01_PO.validateTermsCondition_TC_04();


    });

    it('Varify the various Buttons on Login Page', () => {
        loginPage_TS01_PO.varifyGoogleButton_TC_05();

        loginButton_TS01_PO.visitHomePage();
        loginPage_TS01_PO.varifyFacebookButton_TC_05();

        loginButton_TS01_PO.visitHomePage();
        loginPage_TS01_PO.varifyContinueButton_TC_05();

    });

    it('Varify and Validate to the Product logo', () => {
        productLogo_TS02_PO.verifyProductLogo_TC_08();

        productLogo_TS02_PO.validateProductPage_TC_22();

    });

    it('Varify and Validate to the Men Section', () => {
        menSection_TS02_PO.varifyMenSection_TC_09();

        menSection_TS02_PO.hoverMenSection_TC_35();

        menSection_TS02_PO.validateMenSection_TC_23();

    });

    it('Varify and Validate to the Women Section', () => {
        womenSection_TS02_PO.varifyWomenSection_TC_10();

        womenSection_TS02_PO.validateWomenSection_TC_24();
    });

    it('Varify and Validate to the Kids Section', () => {
        kidsSection_TS02_PO.varifyKidsSection_TC_11();

        kidsSection_TS02_PO.validateKidsSection_TC_25();
    });

    it('Varify and Validate to the Indie Section', () => {
        indieSection_TS02_PO.varifyIndieSection_TC_12();

        indieSection_TS02_PO.validateIndieSection_TC_26();

    });

    it('Varify and Validate to the Home&Kitchen Section', () => {
        h_kSection_TS02_PO.varifyH_KSection_TC_13();

        h_kSection_TS02_PO.validateH_KSection_TC_27();
    });

    it('Varify and Validate to the Customer Care', () => {
        customerCare_TS02_PO.varifyCutomerCare_TC_16();

        customerCare_TS02_PO.validateCustomerCare_TC_30();
    });

    it('Varify and Validate to the AjioLuxe', () => {
        ajioLuxe_TS02_PO.varifyAjioLuxe_TC_18();

        ajioLuxe_TS02_PO.validateAjioLuxe_TC_31();
    });


    it('Varify and Validate to the  Add to Cart', () => {
        addToCart_TS02_PO.varifyAddTOCArt_TC_19();

        addToCart_TS02_PO.validateAddTOCart_TC_33();
    });

    it('Varify and Validate to the Searchbar', () => {
        searchbar_TS02_PO.varifySearchbar_TC_21();

        searchbar_TS02_PO.validateSearchbar_TC_34();
    });


    it('Varify the Carousel Section on Menpage', () => {
        carouselSection_TS03_PO.varifyCarouselSection_TC_42();
    });

    it('Verify the Categories of the Men page', () => {
        menPageCategories_TS03_PO.varifySponsorBrand_TC_36();

        menPageCategories_TS03_PO.varifyBloomingToday_TC_37();
    });

    it('Log all categories on Mens page', () => {
        logAllCategories_TS03_PO.logAllCategories_TC_43();
    });


    it('Validate Login and Logout of the application', () => {
        loginApplication_TS01_PO.loginApp_TC_07();

        postLoginTest_TS02_PO.validateSignOut_TC_29();
    });

    it('Varify and Validate the My Account and Signout', () => {
        loginApplication_TS01_PO.loginApp_TC_07();

        postLoginTest_TS02_PO.varifyMyAccount_TC_14();

        postLoginTest_TS02_PO.varifySignOut_TC_15();

        postLoginTest_TS02_PO.validateMyAccount_TC_28();

    });

    it('Varify and Validate to the wishlit', () => {
        wishlist_TS02_PO.varifyWishlist_TC_20();

        wishlist_TS02_PO.validateWishlist_TC_32();
    });

    //abhay

    it('Verification of input tag ( TC-44 ) ', () => {
        verifyInput.inputTag;
    });

    it("Validate the input tag ( TC-45 )", () => {
        validateInput.inputValueAttr();
    });

    it('For any pseudowords, it will redirect to no product found page ( TC-46 )', () => {

        pseudoword.pseudowordSearch(data.pseudoWord);
        pseudoword.assertionOfText;
        pseudoword.assertOfPseudoWordInUrl;

    });

    it("After clicking on input Select any product from dropdown then user will redirect to that page ( TC-47 )", () => {

        redirectByDropdown.pressEnterInInputTag();
        redirectByDropdown.selectFromDropdown();
        redirectByDropdown.assertToRedirectPage();

    })

    it("Search for the particular product which is 'Marvel Comics' ( TC-48 ) ", () => {

        searchParticularProduct.assertTheInputSearchTag();
        searchParticularProduct.searchMarvelComics();
        searchParticularProduct.assertTheRedirectedPage();

    })

    it("Filter for men on marvel comics page ( TC-49 )", () => {

        searchParticularProduct.searchMarvelComics();
        searchParticularProduct.assertTheRedirectedPage();
        filterManFromCheckbox.filterMan();
        filterManFromCheckbox.assertAfterFilterMan();
    })

    it("Open the first product visible on the page ( TC-50 )", () => {

        searchParticularProduct.searchMarvelComics();
        filterManFromCheckbox.filterMan();
        filterManFromCheckbox.assertAfterFilterMan();
        redirectToSingleProduct.selectingTheFirstProduct();
        redirectToSingleProduct.assertTheCap();
    })

    it("Scroll to see product details  ( TC-51 )", () => {

        searchParticularProduct.searchMarvelComics();
        filterManFromCheckbox.filterMan();
        redirectToSingleProduct.selectingTheFirstProduct();
        redirectToSingleProduct.assertTheCap();
        scrollToSeeProductDetails.scrollPage();
        scrollToSeeProductDetails.assertTheDetails();

    })

    it("Veriy other information related to first product ( TC-52 )", () => {

        searchParticularProduct.searchMarvelComics();
        filterManFromCheckbox.filterMan();
        redirectToSingleProduct.selectingTheFirstProduct();
        scrollToSeeProductDetails.scrollPage();
        verifyOtherInfo.clickOnOtherInformation();
        verifyOtherInfo.assertOtherInformation();

    })

    it("Verify the price of product after discount is applied. ( TC-54 )", () => {

        searchParticularProduct.searchMarvelComics();
        searchParticularProduct.assertTheRedirectedPage();
        filterManFromCheckbox.filterMan();
        redirectToSingleProduct.selectingTheFirstProduct();
        verifyPrice.verifyPriceAfterDiscount();
    })

    it("Click on Service FAQs ( TC-55 ) ", () => {

        searchParticularProduct.searchMarvelComics();
        filterManFromCheckbox.filterMan();
        redirectToSingleProduct.selectingTheFirstProduct();
        serviceFaqsLink.clickOnServiceFAQsLink();
        serviceFaqsLink.assertServiceFAQsPage();

    })

    it("Verify the ADD TO BAG and SAVE TO WISHLIST button ( TC-56)", () => {

        searchParticularProduct.searchMarvelComics();
        filterManFromCheckbox.filterMan();
        verifyButton.verifyAddToBagButton();
        verifyButton.verifySaveToWishlistButton();

    })

    it("Click on SAVE TO WISHLIST button ( TC-57 )", () => {

        searchParticularProduct.searchMarvelComics();
        filterManFromCheckbox.filterMan();
        validateWishlistBtn.clickSaveToWishlistButton();
        validateWishlistBtn.loginToSwitchPage(data.number);
        validateWishlistBtn.moveToWishlistPage();
        validateWishlistBtn.verifyProductOnWishlistPage();
    })

    it("Click functionality of 'click here' button in the RETURNS section. ( TC-58 )", () => {

        searchParticularProduct.searchMarvelComics();
        filterManFromCheckbox.filterMan();
        redirectToSingleProduct.selectingTheFirstProduct();
        RETURNS.clickOnClickHere();
        RETURNS.assertReturnsPage();
    })

    it("Validate the click functionality of bag icon  on the wishlist page. ( TC-59 )", () => {

        searchParticularProduct.searchMarvelComics();
        filterManFromCheckbox.filterMan();
        redirectToSingleProduct.selectingTheFirstProduct();
        validateWishlistBtn.clickSaveToWishlistButton();
        validateWishlistBtn.loginToSwitchPage(data.number);
        validateWishlistBtn.moveToWishlistPage();
        deleteFromWishlist.clickOnDeleteIcon();
        deleteFromWishlist.assertToDeleteProduct()
    })

    it("Validate the click functionality of bag icon  on the wishlist page. ( TC-60 )", () => {
        try {
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

    it("Validate the click functionality of product image on the wishlist page. ( TC-61 )", () => {
        searchParticularProduct.searchMarvelComics();
        filterManFromCheckbox.filterMan();
        redirectToSingleProduct.selectingTheFirstProduct();
        validateWishlistBtn.clickSaveToWishlistButton();
        validateWishlistBtn.loginToSwitchPage(data.number);
        validateWishlistBtn.moveToWishlistPage();
        clickOnImage.clickOnProductImage();
        clickOnImage.assertForWishlistPageAgain();

    })


    // mamta

    it.skip('do login', () => {
        Login_PO.login();
    });
    it('Focus on search', () => {
        Search_PO.SearchBox();
        Search_PO.SelectVal();

    });
    it('Product Page Visiblity', () => {
        Search_PO.SelectByCategory();
        Productpage_PO.AssertProductPage();
    });
    it('Find First Product', () => {
        Search_PO.SelectByCategory();
        Productpage_PO.AssertFirstProduct();
    });
    it('Select Size', () => {
        Search_PO.SelectByCategory();
        Productpage_PO.AssertFirstProduct();
        SelectSize_PO.SelectSizeProduct();
    });
    it('AddToBagBtn', () => {
        Search_PO.SelectByCategory();
        Productpage_PO.AssertFirstProduct();
        SelectSize_PO.SelectSizeProduct();
        AddToBag_PO.AssertAddBtn();
    });
    it('Add Click To AddToBagBtn', () => {
        Search_PO.SelectByCategory();
        Productpage_PO.AssertFirstProduct();
        SelectSize_PO.SelectSizeProduct();
        AddToBag_PO.ClickBagButton();
    });
    it('Hover Cart Button', () => {
        Search_PO.SelectByCategory();
        Productpage_PO.AssertFirstProduct();
        SelectSize_PO.SelectSizeProduct();
        AddToBag_PO.ClickBagButton();
        CartHover_PO.CartHovercard();
        CartHover_PO.ProceedCheckOutBtn();
    });
    it('Proceed Button', () => {
        Search_PO.SelectByCategory();
        Productpage_PO.AssertFirstProduct();
        SelectSize_PO.SelectSizeProduct();
        AddToBag_PO.ClickBagButton();
        CartHover_PO.CartHovercard();
        CartHover_PO.ProceedCheckOutBtn();
        CartHover_PO.ClickProceedCheckOutBtn();
    });
    it('Go To Bag Btn', () => {
        Search_PO.SelectByCategory();
        Productpage_PO.AssertFirstProduct();
        SelectSize_PO.SelectSizeProduct();
        AddToBag_PO.ClickBagButton();
        GoToBag_PO.AssertGoToBagBtn();
        GoToBag_PO.ClicKOnGoToBagBtn();
        GoToBag_PO.RedirectToCart();

    });
    it('Cart Page', () => {
        Search_PO.SelectByCategory();
        Productpage_PO.AssertFirstProduct();
        SelectSize_PO.SelectSizeProduct();
        AddToBag_PO.ClickBagButton();
        CartPage_PO.AssertCartBtn();
        CartPage_PO.ClickCartBtn();
        CartPage_PO.AssertProduct();
        CartPage_PO.ClickOnProduct();
    });
    it('Show product details', () => {
        Search_PO.SelectByCategory();
        Productpage_PO.AssertFirstProduct();
        SelectSize_PO.SelectSizeProduct();
        AddToBag_PO.ClickBagButton();
        CartPage_PO.AssertCartBtn();
        CartPage_PO.ClickCartBtn();
        CartPage_PO.AssertProduct();
        CartPage_PO.ShowProductDetails();
    });
    it('Proceed button', () => {
        Search_PO.SelectByCategory();
        Productpage_PO.AssertFirstProduct();
        SelectSize_PO.SelectSizeProduct();
        AddToBag_PO.ClickBagButton();;
        CartPage_PO.ClickCartBtn();
        ProceedButton_PO.AssertProceedButton();
        ProceedButton_PO.ClickOnProceedBtn();
        Login_PO.login();
    });
    it('Assert User Name', () => {
        Search_PO.SelectByCategory();
        Productpage_PO.AssertFirstProduct();
        SelectSize_PO.SelectSizeProduct();
        AddToBag_PO.ClickBagButton();
        CartPage_PO.AssertCartBtn();
        CartPage_PO.ClickCartBtn();
        // ProceedButton_PO.AssertProceedButton();
        ProceedButton_PO.ClickOnProceedBtn();
        Login_PO.login();
        UserName_PO.AssertUserName(data.name);
        ProceedShipping_PO.AssertShippingBtn();
        ProceedShipping_PO.ClickShippingBtn();
        OrderSummary_PO.AssertProceedPayBtn();
        OrderSummary_PO.ProceedPayBtn();
        OrderSummary_PO.AssertOrderSummary();
    });
    it('Shipping Btn', () => {
        Search_PO.SelectByCategory();
        Productpage_PO.AssertFirstProduct();
        SelectSize_PO.SelectSizeProduct();
        AddToBag_PO.ClickBagButton();
        CartPage_PO.AssertCartBtn();
        CartPage_PO.ClickCartBtn();
        // ProceedButton_PO.AssertProceedButton();
        ProceedButton_PO.ClickOnProceedBtn();
        Login_PO.login();
        UserName_PO.AssertUserName(data.name);
        ProceedShipping_PO.AssertShippingBtn();
        ProceedShipping_PO.ClickShippingBtn();

    });
    it('Order Details', () => {
        Search_PO.SelectByCategory();
        Productpage_PO.AssertFirstProduct();
        SelectSize_PO.SelectSizeProduct();
        AddToBag_PO.ClickBagButton();
        CartPage_PO.AssertCartBtn();
        CartPage_PO.ClickCartBtn();
        // ProceedButton_PO.AssertProceedButton();
        ProceedButton_PO.ClickOnProceedBtn();
        Login_PO.login();
        UserName_PO.AssertUserName(data.name);
        ProceedShipping_PO.AssertShippingBtn();
        ProceedShipping_PO.ClickShippingBtn();
        OrderSummary_PO.AssertProceedPayBtn();
        OrderSummary_PO.ProceedPayBtn();
        OrderSummary_PO.AssertOrderSummary();

    });
    it('Find Logo', () => {
        Search_PO.SelectByCategory();
        Productpage_PO.AssertFirstProduct();
        SelectSize_PO.SelectSizeProduct();
        AddToBag_PO.ClickBagButton();
        CartPage_PO.AssertCartBtn();
        CartPage_PO.ClickCartBtn();
        ProceedButton_PO.ClickOnProceedBtn();
        Login_PO.login();
        UserName_PO.AssertUserName(data.name);
        ProceedShipping_PO.AssertShippingBtn();
        ProceedShipping_PO.ClickShippingBtn();
        OrderSummary_PO.AssertProceedPayBtn();
        OrderSummary_PO.ProceedPayBtn();
        OrderSummary_PO.AssertOrderSummary();
        FindLogo_PO.ClickIconBtn();
    });
    it('Going Back To cart', () => {
        Search_PO.SelectByCategory();
        Productpage_PO.AssertFirstProduct();
        SelectSize_PO.SelectSizeProduct();
        AddToBag_PO.ClickBagButton();
        CartPage_PO.AssertCartBtn();
        CartPage_PO.ClickCartBtn();
        ProceedButton_PO.ClickOnProceedBtn();
        Login_PO.login();
        UserName_PO.AssertUserName(data.name);
        ProceedShipping_PO.AssertShippingBtn();
        ProceedShipping_PO.ClickShippingBtn();
        OrderSummary_PO.AssertProceedPayBtn();
        OrderSummary_PO.ProceedPayBtn();
        OrderSummary_PO.AssertOrderSummary();
        FindLogo_PO.ClickIconBtn();
        CartPage_PO.ClickCartBtn();
    });
    it('Delete btn', () => {
        Search_PO.SelectByCategory();
        Productpage_PO.AssertFirstProduct();
        SelectSize_PO.SelectSizeProduct();
        AddToBag_PO.ClickBagButton();
        CartPage_PO.AssertCartBtn();
        CartPage_PO.ClickCartBtn();
        ProceedButton_PO.ClickOnProceedBtn();
        Login_PO.login();
        UserName_PO.AssertUserName(data.name);
        ProceedShipping_PO.AssertShippingBtn();
        ProceedShipping_PO.ClickShippingBtn();
        OrderSummary_PO.AssertProceedPayBtn();
        OrderSummary_PO.ProceedPayBtn();
        OrderSummary_PO.AssertOrderSummary();
        FindLogo_PO.ClickIconBtn();
        CartPage_PO.ClickCartBtn();
        DeleteBtn_PO.FindDeleteBtn();
        DeleteBtn_PO.ClickDeleteBtn();
        DeleteBtn_PO.CardDelete();
    });
    it('Empty cart', () => {
        Search_PO.SelectByCategory();
        Productpage_PO.AssertFirstProduct();
        SelectSize_PO.SelectSizeProduct();
        AddToBag_PO.ClickBagButton();
        CartPage_PO.AssertCartBtn();
        CartPage_PO.ClickCartBtn();
        ProceedButton_PO.ClickOnProceedBtn();
        Login_PO.login();
        UserName_PO.AssertUserName(data.name);
        ProceedShipping_PO.AssertShippingBtn();
        ProceedShipping_PO.ClickShippingBtn();
        OrderSummary_PO.AssertProceedPayBtn();
        OrderSummary_PO.ProceedPayBtn();
        OrderSummary_PO.AssertOrderSummary();
        FindLogo_PO.ClickIconBtn();
        CartPage_PO.ClickCartBtn();
        DeleteBtn_PO.FindDeleteBtn();
        DeleteBtn_PO.ClickDeleteBtn();
        DeleteBtn_PO.CardDelete();
        EmptyMsg_PO.AssertEmptyBag();
    });
    it('Going Back to home', () => {
        Search_PO.SelectByCategory();
        Productpage_PO.AssertFirstProduct();
        SelectSize_PO.SelectSizeProduct();
        AddToBag_PO.ClickBagButton();
        CartPage_PO.AssertCartBtn();
        CartPage_PO.ClickCartBtn();
        ProceedButton_PO.ClickOnProceedBtn();
        Login_PO.login();
        UserName_PO.AssertUserName(data.name);
        ProceedShipping_PO.AssertShippingBtn();
        ProceedShipping_PO.ClickShippingBtn();
        OrderSummary_PO.AssertProceedPayBtn();
        OrderSummary_PO.ProceedPayBtn();
        OrderSummary_PO.AssertOrderSummary();
        FindLogo_PO.ClickIconBtn();
        CartPage_PO.ClickCartBtn();
        DeleteBtn_PO.FindDeleteBtn();
        DeleteBtn_PO.ClickDeleteBtn();
        DeleteBtn_PO.CardDelete();
        EmptyMsg_PO.AssertEmptyBag();
        FindLogo_PO.ClickIconBtn();
    });
    it('Sign out', () => {
        Search_PO.SelectByCategory();
        Productpage_PO.AssertFirstProduct();
        SelectSize_PO.SelectSizeProduct();
        AddToBag_PO.ClickBagButton();
        CartPage_PO.AssertCartBtn();
        CartPage_PO.ClickCartBtn();
        ProceedButton_PO.ClickOnProceedBtn();
        Login_PO.login();
        UserName_PO.AssertUserName(data.name);
        ProceedShipping_PO.AssertShippingBtn();
        ProceedShipping_PO.ClickShippingBtn();
        OrderSummary_PO.AssertProceedPayBtn();
        OrderSummary_PO.ProceedPayBtn();
        OrderSummary_PO.AssertOrderSummary();
        FindLogo_PO.ClickIconBtn();
        CartPage_PO.ClickCartBtn();
        DeleteBtn_PO.FindDeleteBtn();
        DeleteBtn_PO.ClickDeleteBtn();
        DeleteBtn_PO.CardDelete();
        EmptyMsg_PO.AssertEmptyBag();
        FindLogo_PO.ClickIconBtn();
        SignOut_PO.FindSignOutBtn();
        SignOut_PO.ClickSignOutBtn();
    });
});

