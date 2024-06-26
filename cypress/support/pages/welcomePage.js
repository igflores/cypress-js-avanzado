class WelcomePage {
  get = {
    onlineShopButton: () =>
      cy.get('[data-cy="onlineshoplink"]', { timeout: 20000 }),
  };

  selectOnlineShopButton() {
    this.get.onlineShopButton().click();
  }
}
export const welcomePage = new WelcomePage();
