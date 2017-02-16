import { browser, element, by } from 'protractor';

export class HousingPage {
    navigateTo() {
        return browser.get('/');
    }

    getParagraphText() {
        return element(by.css('.lvl-title')).getText();
    }
}
