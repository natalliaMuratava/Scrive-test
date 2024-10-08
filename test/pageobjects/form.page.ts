import { browser } from '@wdio/globals';
import fs from 'fs';
import path from 'path';
import { SIGN_DOCUMENT_URL } from '../constants';

export default class FormPage {
    private screenshotDir: string = path.join(__dirname, 'screenshots');

    get arrowText() {
        return $('.arrowtext');
    }

    get aboutYouSection() {
        return $('div.section.extradetails');
    }

    get fullNameInput() {
        return $('input#name');
    }

    get nextButton() {
        return $('a[role="button"] span');
    }

    get modal() {
        return $('.section.sign.above-overlay');
    }

    get signButton() {
        return $('a.sign-button');
    }

    get confirmationTextElement() {
        return $('h1.follow span');
    }

    public async open() {
        await browser.url(SIGN_DOCUMENT_URL);
    }

    public async goToAboutYouSection() {
        await this.arrowText.click();
        await this.aboutYouSection.waitForDisplayed();
    }

    public async setFullName(fullName: string) {
        await this.fullNameInput.waitForDisplayed();
        await this.fullNameInput.setValue(fullName);
    }

    public async clickNextButton() {
        await this.nextButton.waitForClickable();
        await this.nextButton.click();
    }

    public async clickSignButton() {
        await this.signButton.waitForClickable();
        await this.signButton.click();
    }

    public async takeScreenshot(filename: string) {
        const screenshotPath = path.join(this.screenshotDir, filename);
        if (!fs.existsSync(this.screenshotDir)) {
            fs.mkdirSync(this.screenshotDir, { recursive: true });
        }
        await browser.saveScreenshot(screenshotPath);
    }
}
