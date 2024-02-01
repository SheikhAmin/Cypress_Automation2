class login{
    userName = '[data-test="username"]'
    password = '[data-test="password"]'
    loginBtn = '#login-button';
   
   
  
    setUser(user){
        cy.get(this.userName).type(user);
    }
    setPassword(pass){
        cy.get(this.password).type(pass);
    }
    clickLogin(){
        cy.get(this.loginBtn).click();
    }
}

export default login;