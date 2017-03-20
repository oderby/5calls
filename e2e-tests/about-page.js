const webdriver = require('selenium-webdriver');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const By = webdriver.By;
const until = webdriver.until;

/**
 * Page object encapsulating about page-related behaviors.
 *
 * @class AboutPage
 */
class AboutPage {
  constructor(driver) {
    this.driver = driver;
    this.whyCallingWorksLinkText = 'why calling works.'
    this.aboutPageLinkText = 'About'
    this.aboutPageText = 'ABOUT 5 CALLS';
    this.aboutPageSelector = 'h2.about__title';
  }

/**
 * Obtains the Why Calling Works link element
 *
 * @returns the link element
 *
 * @memberOf AboutPage
 */
  getWhyCallingWorksLinkElement() {
    const linkTextBy = By.linkText(this.whyCallingWorksLinkText);
    this.driver.wait(until.elementLocated(linkTextBy), 5000);
    return this.driver.findElement(linkTextBy);
  }

/**
 * Encalsulates characteristic text element on the About page.
 *
 * @returns the About page element
 *
 * @memberOf AboutPage
 */
  getAboutPageTextElement() {
    const aboutPageSelectorBy = By.css(this.aboutPageSelector);
    this.driver.wait(until.elementLocated(aboutPageSelectorBy), 3000);
    return this.driver.findElement(aboutPageSelectorBy);
  }

/**
 * Obtains the About link element in the home page footer
 *
 * @returns
 *
 * @memberOf AboutPage
 */
  getAboutPageLinkElement() {
    const aboutPageLinkTextBy = By.linkText(this.aboutPageLinkText);
    this.driver.wait(until.elementLocated(aboutPageLinkTextBy), 2000);
    return this.driver.findElement(aboutPageLinkTextBy);
  }

  /**
   * Encapsulates characteristic text value from the About page.
   *
   * @returns About page text
   * @see #getAboutPageTextElement
   *
   * @memberOf AboutPage
   */
  getAboutPageText() {
    return this.aboutPageText;
  }

}

module.exports = AboutPage;