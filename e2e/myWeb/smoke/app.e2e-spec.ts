import { EaccmkAppPage } from '../pageObject/app.homePage';
import { browser } from 'protractor';
const colors = require('colors');

describe('Elements to be present on Home Page of App', () => {
  let page: EaccmkAppPage;

  beforeEach(() => {
    page = new EaccmkAppPage();
  });

  it('should display `welcome` message on home page', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Welcome');
    console.log(colors.cyan('...intentional sleep for 2 seconds starts , this is for debugging purpose'));
    browser.driver.sleep(2000);
  });
});
