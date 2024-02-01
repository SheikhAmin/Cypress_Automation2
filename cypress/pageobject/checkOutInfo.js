class checkOutInfo{
    /*
    cy.get('#shopping_cart_container > a').click();
    cy.get('.btn_action').click();
   
    cy.get('[data-test="lastName"]').type("Amin");
    cy.get('[data-test="postalCode"]').type(1215);
    cy.get('.btn_primary').click();
    */
   cartBtn = '#shopping_cart_container > a';
   btn = '.btn_action';
   firstName = '[data-test="firstName"]';
   lastName = '[data-test="lastName"]';
   zipCode = '[data-test="postalCode"]';
   btnPrimary = '.btn_primary'
   clickCart(){
    cy.get(this.cartBtn).click();
   }
   clickBtn(){
    cy.get(this.btn).click();
   }

   clickBtnPrimary(){
    cy.get(this.btnPrimary).click();
   }

   setFirstName(fname){
    cy.get(this.firstName).type(fname);
   }

   setLirstName(lname){
    cy.get(this.lastName).type(lname);
   }

   setZipCode(code){
    cy.get(this.zipCode).type(code);
   }
}

export default checkOutInfo;