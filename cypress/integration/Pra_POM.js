// import AddToCart_TS02_PO from "../support/Page_object/AJI0_POM/AddToCart_TS02_PO";
// import AjioLuxe_TS02_PO from "../support/Page_object/AJI0_POM/AjioLuxe_TS02_PO";
// import CarouselSection_TS03_PO from "../support/Page_object/AJI0_POM/CarouselSection_TS03_PO";
// import CustomerCare_TS02_PO from "../support/Page_object/AJI0_POM/CustomerCare_TS02_PO";
// import H_KSection_TS02_PO from "../support/Page_object/AJI0_POM/H_KSection_TS02_PO";
// import IndieSection_TS02_PO from "../support/Page_object/AJI0_POM/IndieSection_TS02_PO";
// import KidsSection_TS02_PO from "../support/Page_object/AJI0_POM/KidsSection_TS02_PO";
// import LogAllCategories_TS03_PO from "../support/Page_object/AJI0_POM/LogAllCategories_TS03_PO";
// import LoginApplication_TS01_PO from "../support/Page_object/AJI0_POM/LoginApplication_TS01_PO";
// import LoginButton_TS01_PO from "../support/Page_object/AJI0_POM/LoginButton_TS01_PO";
// import LoginPage_TS01_PO from "../support/Page_object/AJI0_POM/LoginPage_TS01_PO";
// import MenSection_TS02_PO from "../support/Page_object/AJI0_POM/MenSection_TS02_PO";
// import MensPageCategories_TS03_PO from "../support/Page_object/AJI0_POM/MensPageCategories_TS03_PO";
// import PostLoginTest_TS02_PO from "../support/Page_object/AJI0_POM/PostLoginTest_TS02_PO";
// import ProductLogo_TS02_PO from "../support/Page_object/AJI0_POM/ProductLogo_TS02_PO";
// import Searchbar_TS02_PO from "../support/Page_object/AJI0_POM/Searchbar_TS02_PO";
// import Wishlist_TS02_PO from "../support/Page_object/AJI0_POM/Wishlist_TS02_PO";
// import WomenSection_TS02_PO from "../support/Page_object/AJI0_POM/WomenSection_TS02_PO";

// describe("Automation for AJIO", () => {
//   const loginButton_TS01_PO = new LoginButton_TS01_PO();
//   const loginPage_TS01_PO=new LoginPage_TS01_PO();
//   const loginApplication_TS01_PO=new LoginApplication_TS01_PO();
//   const productLogo_TS02_PO=new ProductLogo_TS02_PO();
//   const menSection_TS02_PO=new MenSection_TS02_PO();
//   const womenSection_TS02_PO=new WomenSection_TS02_PO();
//   const kidsSection_TS02_PO=new KidsSection_TS02_PO();
//   const indieSection_TS02_PO=new IndieSection_TS02_PO();
//   const h_kSection_TS02_PO=new H_KSection_TS02_PO();
//   const customerCare_TS02_PO=new CustomerCare_TS02_PO();
//   const ajioLuxe_TS02_PO=new AjioLuxe_TS02_PO();
//   const addToCart_TS02_PO=new AddToCart_TS02_PO();
//   const wishlist_TS02_PO=new Wishlist_TS02_PO();
//   const postLoginTest_TS02_PO=new PostLoginTest_TS02_PO();
//   const searchbar_TS02_PO=new Searchbar_TS02_PO();
//   const carouselSection_TS03_PO=new CarouselSection_TS03_PO();
//   const menPageCategories_TS03_PO=new MensPageCategories_TS03_PO();
//   const logAllCategories_TS03_PO=new LogAllCategories_TS03_PO();


//   beforeEach(() => {
//     loginButton_TS01_PO.visitHomePage();
//   });

 

//   it("Varyfy and Validate the Login Button", () => {

//     loginButton_TS01_PO.varifyLoginButton_TC_01();
//     loginButton_TS01_PO.validateLoginButton_TC_02();

//   });

//   it('Varyfy and Validate the Terms&Condition', () => {

//     loginPage_TS01_PO.verifyTermsCondition_TC_03();

//     loginButton_TS01_PO.visitHomePage();
//     loginPage_TS01_PO.validateTermsCondition_TC_04();
    
    
//   });

//   it('Varify the various Buttons on Login Page', () => {
//     loginPage_TS01_PO.varifyGoogleButton_TC_05();

//     loginButton_TS01_PO.visitHomePage();
//     loginPage_TS01_PO.varifyFacebookButton_TC_05();

//     loginButton_TS01_PO.visitHomePage();
//     loginPage_TS01_PO.varifyContinueButton_TC_05();
    
//   });

//   it('Varify and Validate to the Product logo', () => {
//     productLogo_TS02_PO.verifyProductLogo_TC_08();

//     productLogo_TS02_PO.validateProductPage_TC_22();
    
//   });

//   it('Varify and Validate to the Men Section', () => {
//     menSection_TS02_PO.varifyMenSection_TC_09();

//     menSection_TS02_PO.hoverMenSection_TC_35();

//     menSection_TS02_PO.validateMenSection_TC_23();
   
//   });

//   it('Varify and Validate to the Women Section', () => {
//     womenSection_TS02_PO.varifyWomenSection_TC_10();

//     womenSection_TS02_PO.validateWomenSection_TC_24();
//   });

//   it('Varify and Validate to the Kids Section', () => {
//     kidsSection_TS02_PO.varifyKidsSection_TC_11();

//     kidsSection_TS02_PO.validateKidsSection_TC_25();
//   });

//   it('Varify and Validate to the Indie Section', () => {
//     indieSection_TS02_PO.varifyIndieSection_TC_12();

//     indieSection_TS02_PO.validateIndieSection_TC_26();

//   });

//   it('Varify and Validate to the Home&Kitchen Section', () => {
//     h_kSection_TS02_PO.varifyH_KSection_TC_13();

//     h_kSection_TS02_PO.validateH_KSection_TC_27();
//   });

//   it('Varify and Validate to the Customer Care', () => {
//     customerCare_TS02_PO.varifyCutomerCare_TC_16();

//     customerCare_TS02_PO.validateCustomerCare_TC_30();
//   });

//   it('Varify and Validate to the AjioLuxe', () => {
//     ajioLuxe_TS02_PO.varifyAjioLuxe_TC_18();

//     ajioLuxe_TS02_PO.validateAjioLuxe_TC_31();
//   });


//   it('Varify and Validate to the  Add to Cart', () => {
//       addToCart_TS02_PO.varifyAddTOCArt_TC_19();

//       addToCart_TS02_PO.validateAddTOCart_TC_33();
//   });

//   it('Varify and Validate to the Searchbar', () => {
//     searchbar_TS02_PO.varifySearchbar_TC_21();

//     searchbar_TS02_PO.validateSearchbar_TC_34();
//   });


//   it('Varify the Carousel Section on Menpage', () => {
//     carouselSection_TS03_PO.varifyCarouselSection_TC_42();
//   });

//   it('Verify the Categories of the Men page', () => {
//     menPageCategories_TS03_PO.varifySponsorBrand_TC_36();

//     menPageCategories_TS03_PO.varifyBloomingToday_TC_37();
//   });

//   it('Log all categories on Mens page', () => {
//     logAllCategories_TS03_PO.logAllCategories_TC_43();
//   });


//   it('Validate Login and Logout of the application', () => {
//     loginApplication_TS01_PO.loginApp_TC_07();

//     postLoginTest_TS02_PO.validateSignOut_TC_29();
//   });

//   it('Varify and Validate the My Account and Signout', () => {
//     loginApplication_TS01_PO.loginApp_TC_07();

//     postLoginTest_TS02_PO.varifyMyAccount_TC_14();

//     postLoginTest_TS02_PO.varifySignOut_TC_15();

//     postLoginTest_TS02_PO.validateMyAccount_TC_28();
    
//   });

//   it('Varify and Validate to the wishlit', () => {
//       wishlist_TS02_PO.varifyWishlist_TC_20();

//       wishlist_TS02_PO.validateWishlist_TC_32();
//   });

  

// });
