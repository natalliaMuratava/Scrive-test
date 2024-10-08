import { expect } from '@wdio/globals';
import DocumentSignedPage from '../pageobjects/documentSigned.page';
import FormPage from '../pageobjects/form.page';
import { SIGNED_TEXT, FULL_NAME, SCREENSHOT_CONFIRMATION_MODAL } from '../constants';

describe('Signing Document Page', () => {
    const formPage = new FormPage();
    const documentSignedPage = new DocumentSignedPage();

    beforeEach(async () => {
        await formPage.open();
    });

    it('should sign the document page', async () => {
        await formPage.goToAboutYouSection();
        await formPage.setFullName(FULL_NAME);
        await formPage.clickNextButton();
        await formPage.takeScreenshot(SCREENSHOT_CONFIRMATION_MODAL);
        await formPage.clickSignButton();
        await documentSignedPage.confirmationTextElement.waitForDisplayed();
        await expect(documentSignedPage.confirmationTextElement).toHaveText(SIGNED_TEXT);
    });
});
