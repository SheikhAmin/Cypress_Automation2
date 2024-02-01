import checkOutInfo from "../pageobject/checkOutInfo";
import login from "../pageobject/login";
import selectItem from "../pageobject/selectItem";

describe("Exam", () => {
  beforeEach("visit", () => {
    cy.visit("https://www.saucedemo.com/v1/index.html");
  });

  it("Task 1", () => {
    const obj = new login();
    obj.setUser("standard_user");
    obj.setPassword("secret_sauce");
    obj.clickLogin();

    const obj2 = new selectItem();
    obj2.clickItem1();
    obj2.clickItem2();

    const obj3 = new checkOutInfo();
    obj3.clickCart();
    obj3.clickBtn();
    obj3.setFirstName("Sheikh");
    obj3.setLirstName("Amin");
    obj3.setZipCode(1215);
    obj3.clickBtnPrimary();
    // checkout information tax and total ammount
    cy.get(".summary_tax_label").contains("$1.92");
    cy.get(".summary_total_label").contains("$25.90");
    //checkout
    cy.get(".btn_action").click();
    //validate checkout
    cy.get(".complete-header").contains("THANK YOU FOR YOUR ORDER");
  });

  it("Task 2 Subsection 1(Validating Login Page)", () => {
    // providing wrong credentials
    cy.get('[data-test="username"]').type("glkafgaiwl");
    cy.get('[data-test="password"]').type("5465");
    cy.get("#login-button").click();
    cy.get('[data-test="error"]').contains(
      "Epic sadface: Username and password do not match any user in this service"
    );
    cy.reload();
    // This is for locked_out_user
    cy.get('[data-test="username"]').type("locked_out_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get("#login-button").click();
    cy.get('[data-test="error"]').contains(
      "Epic sadface: Sorry, this user has been locked out."
    );

    cy.reload();

    // This is for problem_user
    cy.get('[data-test="username"]').type("problem_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get("#login-button").click();
    cy.get("#item_4_img_link > .inventory_item_img").should("exist");
    cy.go("back");
    cy.reload();
    // This below portion is for the user "performance_glitch_user"
    /*
    cy.get('[data-test="username"]').type("performance_glitch_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get("#login-button").click();
    cy.wait(5000);
    cy.go('back');
    cy.reload();
    */
  });

  it.only("Task 2 Subsection 2 & 3", () => {
    const obj = new login();
    obj.setUser("standard_user");
    obj.setPassword("secret_sauce");
    obj.clickLogin();

    const obj2 = new selectItem();
    obj2.clickItem1();
    obj2.clickItem2();

    cy.get("#shopping_cart_container > a > span").contains("2");
    cy.get("#shopping_cart_container > a").click();
    // validating exixting validation messages of Checkout:Your Information Page
    cy.get(".btn_action").click();
    cy.get('[data-test="firstName"]').should("be.visible");

    cy.get('[data-test="lastName"]').should("be.visible");

    cy.get('[data-test="postalCode"]').should("be.visible");
    cy.get(".btn_primary").should("be.visible");
    cy.get(".cart_cancel_link").should("be.visible");

    //3 suggestions
    /*
         For login in portion there should be fileds which will show the username so it 
         will be easy to validate the correct user has looged in or not 
         */
  });
});
