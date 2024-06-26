class RegisterPage {
  get = {
    iniciaSesionLink: () => cy.get('[data-cy="registertoggle"]'),
  };

  goToLoginPage() {
    this.get.iniciaSesionLink().dblclick();
  }
}
export const registerPage = new RegisterPage();
