import { browser, by, element } from 'protractor';

export enum PageHeader {
  eaccmkGithubUrl = 'https://github.com/eaccmk'
}

export class EaccmkAppPage {
  navigateTo() {
    browser.waitForAngularEnabled(false);
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  // public MyGitHybAccount = $('._ngcontent-c0')

}
