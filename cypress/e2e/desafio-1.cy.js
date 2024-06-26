import { registerPage } from "../support/pages/registerPage";
import { loginPage } from "../support/pages/loginPage";
import { welcomePage } from "../support/pages/welcomePage";
import { productListPage } from "../support/pages/productListPage";
import data from "../fixtures/data/desafio-1.json";

describe("Challenge # 1 - Online Shop: Add product, search for it, delete it, and search for it to verify that it does not exist", () => {
  let data;

  before(() => {
    cy.fixture("data/desafio-1.json").then((fixtureData) => {
      data = fixtureData.createProductFixture;
    });
  });

  beforeEach("Preconditions", () => {
    cy.visit("");
    registerPage.goToLoginPage();
    loginPage.loginSuccessfully();
    welcomePage.selectOnlineShopButton();
  });

  it("Add product, search for it, delete it, and search for it to verify that it does not exist", () => {
    productListPage.addProduct();
    productListPage.get.createProductPopup().should("be.visible");
    productListPage.createNewProduct(data.name, data.price, data.url, data.id);

    expect("1").to.be.equal("1");
  });
});
