import { HomePage, OverviewPage, ShoppingCartPage, ResultsPage } from '../pages/app.pages';
import { browser, logging, By } from 'protractor';
import { pageElements, testData } from '../data/app.test-data';
import { AppFunctions } from './../functions/app.functions';

const homePage = new HomePage();
const overviewPage = new OverviewPage();
const shoppingCartPage = new ShoppingCartPage();
const appFunctions = new AppFunctions();
const resultPage = new ResultsPage();

describe('Search with keyword and add quantity to shopping cart', () => {

  beforeAll(() => {
    browser.ignoreSynchronization = true;
    browser.get(pageElements.url);
});
  it('should search for an item', () => {

    browser.driver.findElement(By.id(pageElements.elements.searchBar)).sendKeys(testData.searchTerm);
    browser.driver.findElement(By.xpath(pageElements.elements.searchButton)).click();
    expect(homePage.findIcon().isDisplayed()).toBe(true);

  });

  it('should navigate to item overview page', () => {
    homePage.getItem(testData.itemPicked).click();
    expect(overviewPage.getTitle().isPresent()).toBe(true);
  });

  it('should select quantity and add item to shopping cart', () => {
    appFunctions.selectQuantity();
    appFunctions.addToShoppingCart();
  });

  it('should  validate that the item is added', () => {
    shoppingCartPage.getShoppingCartButton().click();
    expect(shoppingCartPage.getProductTitle().getText()).toBe(testData.searchTerm);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

});

describe('Search for an item with unrelated department', () => {

  beforeAll(() => {
    browser.ignoreSynchronization = true;
    browser.get(pageElements.url);
    
});

  it('should select a department from the search drop down menu', () => {
  homePage.getDepartmantButton().click();
  homePage.getDepartmantName(testData.departmentName).click();
});

  it('should enter value into search bar and click search', () => {
    browser.driver.findElement(By.id(pageElements.elements.searchBar)).sendKeys(testData.searchTerm);
    browser.driver.findElement(By.xpath(pageElements.elements.searchButton)).click();
});

  it('should validate message indicating no results from the selected department', () => {
    expect(resultPage.getNoResultMessage().getText()).toBe(testData.message);
});

  afterEach(async () => {
      // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});



