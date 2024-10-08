import BasePage from './base.page';
import path from 'path';
import fs from 'fs';
import { CONFIRMATION_MODAL_FILE, SIGN_DOCUMENT_URL } from '../constants';

export default class FormPage extends BasePage {
    private url: string = SIGN_DOCUMENT_URL;
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
        await super.open(this.url);
    }

    public async goToAboutYouSection() {
        await this.arrowText.click();
        await this.aboutYouSection.waitForDisplayed();
    }

    public async makeModalScreenshot() {
        await this.modal.scrollIntoView();
        await this.modal.waitForDisplayed({ timeout: 5000 });

        if (!fs.existsSync(this.screenshotDir)) {
            fs.mkdirSync(this.screenshotDir, { recursive: true });
        }

        const screenshotPath = path.join(this.screenshotDir, CONFIRMATION_MODAL_FILE);

        await this.modal.saveScreenshot(screenshotPath);
    }
}
