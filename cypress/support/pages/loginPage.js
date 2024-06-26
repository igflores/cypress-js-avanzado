class LoginPage {
  get = {
    userInput: () => cy.get('[data-cy="user"]'),
    passwordInput: () => cy.get('[data-cy="pass"]'),
    loginButton: () => cy.get('[data-cy="submitForm"]'),
  };

  fillUser() {
    this.get.userInput().type(Cypress.env().username);
  }

  fillPassword() {
    this.get.passwordInput().type(Cypress.env().password);
  }

  selectLoginButton() {
    this.get.loginButton().click();
  }

  loginSuccessfully() {
    this.fillUser();
    this.fillPassword();
    this.selectLoginButton();
  }
}
export const loginPage = new LoginPage();
