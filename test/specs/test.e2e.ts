import { expect } from '@wdio/globals';
import FormPage from '../pageobjects/form.page';
import { SIGNED_TEXT, FULL_NAME } from '../constants';

describe('Signing Document Page', () => {
    const formPage = new FormPage();

    beforeEach(async () => {
        await formPage.open();
    });

    it('should sign the document page', async () => {
        await formPage.goToAboutYouSection();
        await formPage.fullNameInput.setValue(FULL_NAME);
        await formPage.nextButton.click();
        await formPage.makeModalScreenshot();
        await formPage.signButton.click();
        await formPage.confirmationTextElement.waitForDisplayed();
        await expect(formPage.confirmationTextElement).toHaveText(SIGNED_TEXT);
    });
});
