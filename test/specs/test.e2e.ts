// test/signingDocument.test.ts
import { expect } from '@wdio/globals';
import SigningDocumentPage from '../pageobjects/signed.document.page';
import DocumentSignedPage from '../pageobjects/signingDocument.page';

describe('Signing Document Page', () => {
    const signingDocumentPage = new SigningDocumentPage();
    const documentSignedPage = new DocumentSignedPage();

    before(async () => {
        await documentSignedPage.open(); // Открываем страницу перед выполнением тестов
    });

    after(async () => {
        await browser.deleteSession(); // Закрываем сессию браузера после всех тестов
    });

    it('should sign the document page', async () => {
        await 
        // Проверяем заголовок страницы
        // const title = await browser.getTitle();
        // expect(title).toContain('Expected Page Title');

        // Кликаем по стрелке и ожидаем появления секции "About You"

        await documentSignedPage.clickArrow();
        const aboutYouSection = await $('div.section.extradetails');
        await aboutYouSection.waitForDisplayed({ timeout: 10000 });

        // Заполняем имя
        await documentSignedPage.fillFullName();

        // Ожидаем появления кнопки "Next" и кликаем по ней
        await documentSignedPage.nextButton.waitForDisplayed({ timeout: 10000 });
        await documentSignedPage.clickNextButton();

        // Делаем скриншот модального окна
        await documentSignedPage.makeModalScreenshot();
        // Подписываем документ
        await documentSignedPage.signDocument();

        // Ожидаем текст "Document Signed" на новой странице
        await signingDocumentPage.waitForConfirmationText();
        
        // Проверка текста с использованием правильного метода
        await expect(documentSignedPage.confirmationTextElement).toBeDisplayed();
        //toHaveText('Document Signed');
    });
});
