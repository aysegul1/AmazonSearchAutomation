import { by, element } from 'protractor';

export class HomePage {

  findIcon() {
    return element(by.css('div[id=search]'));
}

  getItem(itemNumber) {
    return element(by.css(`span[data-component-id=${itemNumber}]`));
  }

  getDepartmantButton() {
    return element(by.css(`select[id="searchDropdownBox"]`));
  }

  getDepartmantName(departmentName) {
    return element(by.css(`select option[value="search-alias=${departmentName}"]`));
  }

}

export class OverviewPage {

  getTitle() {
    return element(by.id('productTitle'));
  }

  getQuantityElement() {
    return element(by.id('quantity'));
  }

  getQuantity(quantity) {
    return element(by.css(`option[value=${quantity}]`));
  }

  getAddToCartButton() {
    return element(by.id('add-to-cart-button'));
  }

}

export class ShoppingCartPage {

  getProductTitle() {
    return element(by.className('a-size-medium sc-product-title a-text-bold'));
  }

  getProduct() {
    return element(by.id('sc-item-C93e74aea-3695-40c9-8360-24224998dea5'));
  }

  getShoppingCartButton() {
    return element(by.id('nav-cart'));
  }

}

export class ResultsPage {
  getNoResultMessage() {
    return element(by.className('a-size-base a-spacing-base a-color-base a-text-normal'));
  }
}


