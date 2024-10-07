// pageobjects/DocumentSignedPage.ts
import { browser } from '@wdio/globals';

export default class DocumentSignedPage {
    // Селектор для текста "Document Signed"
    get confirmationTextElement() {
        return $('h1.follow span'); // Укажите правильный селектор
    }

    // Метод для ожидания текста "Document Signed"
    public async waitForConfirmationText() {
        await this.confirmationTextElement.waitForDisplayed({ timeout: 10000 });
    }

    // Метод для проверки текста
    // public async verifyDocumentSignedText(expectedText: string) {
    //     const text = await this.confirmationTextElement.getText();
    //     expect(text).toContain(expectedText);
    // }
}
