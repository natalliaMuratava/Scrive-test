// pageobjects/DocumentSignedPage.ts
import { browser } from '@wdio/globals';

export default class DocumentSignedPage {
    // Селектор для текста "Document Signed"
//    private url: string = ' https://staging.scrive.com/s/9221714692418396041/9221932570727513073';


    get confirmationTextElement() {
        return $('h1.follow span'); // Укажите правильный селектор
    }
    

    // Метод для ожидания текста "Document Signed"
    public async waitForConfirmationText() {
        await this.confirmationTextElement.isDisplayed();
    }

    // Метод для проверки текста
    // public async verifyDocumentSignedText(expectedText: string) {
    //     const text = await this.confirmationTextElement.getText();
    //     expect(text).toContain(expectedText);
    // }
}
