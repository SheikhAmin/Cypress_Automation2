class selectItem{
    /*
    cy.get(':nth-child(5) > .pricebar > .btn_primary').click();
    cy.get(':nth-child(3) > .pricebar > .btn_primary').click();
    

    */
   item1 = ':nth-child(5) > .pricebar > .btn_primary'
   item2 = ':nth-child(3) > .pricebar > .btn_primary'
   clickItem1(){
    cy.get(this.item1).click();
   }
   clickItem2(){
    cy.get(this.item2).click();
   }

}
export default selectItem;