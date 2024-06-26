import constants from "../constants";

class ProductListPage {
  get = {
    searchBarInput: () => cy.get('input[data-cy="search-bar"]'),
    messagealertModalHeader: () => cy.get('[id^="chakra-modal"] header'),
    closeModalButton: () =>
      cy.get('[id^="chakra-modal"] button[data-cy="closeModal"]'),
    goToShoppingCartButton: () => cy.get('[data-cy="goShoppingCart"]'),

    createProductPopup: () =>
      cy.get('section[id^="chakra-modal"]', { timeout: constants.TIMEOUT }),
    addproductButton: () => cy.get('[data-cy="add-product"]'),
    createProductNameInput: () => cy.get('[data-cy="productName"]'),
    createProductPriceInput: () => cy.get('[data-cy="productPrice"]'),
    createProductUrlInput: () => cy.get('[data-cy="productCard"]'),
    createProductIdInput: () => cy.get('[data-cy="productID"]'),
    createProductButton: () => cy.get('[data-cy="createProduct"]'),
  };

  addProduct() {
    this.get.addproductButton().click();
  }

  createNewProduct(name, price, url, id) {
    this.get.createProductNameInput().type(name);
    this.get.createProductPriceInput().type(price);
    this.get.createProductUrlInput().type(url);
    this.get.createProductIdInput().type(id);
    this.get.createProductButton().click();
  }
}
export const productListPage = new ProductListPage();
