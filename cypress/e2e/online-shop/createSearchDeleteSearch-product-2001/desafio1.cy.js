import { registerPage } from "../../../support/pages/registerPage";
import { loginPage } from "../../../support/pages/loginPage";
import { welcomePage } from "../../../support/pages/welcomePage";
import { productListPage } from "../../../support/pages/productListPage";
import constants from "../../../support/constants";

const directoryName = __dirname.replaceAll("\\", "/");
const module = directoryName.split(/[/]/)[2];
const suiteName = directoryName
  .slice(directoryName.lastIndexOf("/") + 1)
  .split("-")
  .slice(0, -1)
  .join("-");
const suiteId = directoryName.split(/[-]/).pop();

describe(`${suiteName} - ${module}`, () => {
  let data;
  before(() => {
    cy.fixture(`${module}/${suiteName}-${suiteId}/${suiteId}.json`).then(
      (fixtureData) => {
        data = fixtureData.createProductFixture;
      }
    );
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
    productListPage.createNewProductSuccessfully(
      data.name,
      data.price,
      data.url,
      data.id
    );
    productListPage.closeMessageAlert();
    productListPage.searchProductAdded(data.id);
    productListPage.get
      .productSearchedNameLabel({ timeout: constants.TIMEOUT * 3 })
      .should("be.visible")
      .and("have.text", data.name);
    productListPage.deleteProductAddedSuccessfully();
    productListPage.searchProductAdded(data.id);
    productListPage.get
      .productSearchedNameLabel({ timeout: constants.TIMEOUT })
      .should("not.be.visible");
    cy.get("img").should("not.be.visible");
  });
});
