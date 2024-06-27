import constants from "../constants";

class ProductListPage {
  get = {
    createProductPopup: () =>
      cy.get('section[id^="chakra-modal"]', { timeout: constants.TIMEOUT }),
    addproductButton: () => cy.get('[data-cy="add-product"]'),
    createProductNameInput: () => cy.get('[data-cy="productName"]'),
    createProductPriceInput: () => cy.get('[data-cy="productPrice"]'),
    createProductUrlInput: () => cy.get('[data-cy="productCard"]'),
    createProductIdInput: () => cy.get('[data-cy="productID"]'),
    createProductButton: () => cy.get('[data-cy="createProduct"]'),
    addedProductMessageCloseButton: () =>
      cy.get('[data-cy="closeModal"]', { timeout: constants.TIMEOUT }),
    searchTypeSelect: () => cy.get('[data-cy="search-type"]'),
    searchBarInput: () =>
      cy.get('[data-cy="search-bar"]', { timeout: constants.TIMEOUT }),
    productSearchedNameLabel: () => cy.get('p[data-cy="name"]'),
    deleteProductButton: () =>
      cy.get('[data-cy^="delete"]', { timeout: constants.TIMEOUT }),
    confirmDeleteProductButton: () =>
      cy.get("#saveEdit", { timeout: constants.TIMEOUT }),
    deletedProductMessageCloseButton: () => cy.get('[data-cy="closeModal"]'),
  };

  addProduct() {
    this.get.addproductButton().click();
  }

  createNewProductSuccessfully(name, price, url, id) {
    this.get.createProductNameInput().type(name);
    this.get.createProductPriceInput().type(price);
    this.get.createProductUrlInput().type(url);
    this.get.createProductIdInput().type(id);
    this.get.createProductButton().click();
  }

  closeMessageAlert() {
    this.get.addedProductMessageCloseButton().click();
  }

  searchProductAdded(id) {
    this.get.searchTypeSelect().select("ID");
    this.get.searchBarInput().click().clear().type(id).type("{enter}");
  }

  deleteProductAddedSuccessfully() {
    this.get.deleteProductButton().click({ timeout: constants.TIMEOUT });
    this.get.confirmDeleteProductButton().click();
    this.get.deletedProductMessageCloseButton().click();
  }
}
export const productListPage = new ProductListPage();
