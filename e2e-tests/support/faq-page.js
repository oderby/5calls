const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const until = webdriver.until;
const config = require('./e2e-tests.config');

/**
 * Page object encapsulating FAQ page-related behaviors.
 *
 */
class FaqPage {
  constructor(driver) {
    this.driver = driver;
    // FAQ page element selector and text
    this.faqPageSelector = 'header.page-header > h1';
    this.faqPageText = 'FAQ';
  }

  /**
   * Encapsulates characteristic text element on FAQ page.
   *
   * @returns {WebElementPromise} resolves to a text element
   * from the FAQ page.
   */
  getFaqPageElement() {
    const selector = By.css(this.faqPageSelector);
    this.driver.wait(until.elementLocated(selector), config.defaultTimeout * 2);
    return this.driver.findElement(selector);
  }

  /**
   * Tests that faq page element with
   * known text is present.
   *
   * @returns {Promise<boolean>} resolves to true if the
   * faq page element with known text can be
   * found; otherwise false.
   *
   */
  isFaqPage() {
    return this.getFaqPageElement()
      .getText().then(elementText => {
      return Promise.resolve(elementText === this.faqPageText);
    });
  }

}

module.exports = FaqPage;