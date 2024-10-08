import { browser } from '@wdio/globals';

export default class BasePage {
    public async open(url: string) {
        await browser.url(url);
    }

    public async waitForElementDisplayed(element: WebdriverIO.Element) {
        await element.waitForDisplayed({ timeout: 5000 });
    }

    public async click(element: WebdriverIO.Element) {
        await this.waitForElementDisplayed(element);
        await element.click();
    }

    public async setValue(element: WebdriverIO.Element, value: string) {
        await this.waitForElementDisplayed(element);
        await element.setValue(value);
    }

}
