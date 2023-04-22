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
import "cypress-xpath";
describe('Automation for AJIO', () => {
const Login_PO=new Login();
const Search_PO=new SearchVal();
const Productpage_PO=new ProductPage();
const SelectSize_PO=new SelectSize();
const AddToBag_PO=new AddToBag();
const CartHover_PO=new CartHover();
const GoToBag_PO=new GoToBag();
const CartPage_PO=new CartPage();
const ProceedButton_PO=new ProceedButton();
const UserName_PO=new UserName();
const ProceedShipping_PO=new ProceedShipping();
const OrderSummary_PO=new OrderSummaryPage();
const FindLogo_PO=new FindIcon();
const DeleteBtn_PO=new DeleteBtn();
const EmptyMsg_PO=new EmptyBagMsg();
const SignOut_PO=new SignOutBtn();
before(()=>{
    cy.fixture("example").then((data)=>{
        globalThis.data=data;
    })
})
beforeEach(()=>{
    cy.viewport(1308, 800);
        cy.visit("/");

})
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