// test/signingDocument.test.ts
import { expect } from '@wdio/globals';
import DocumentSignedPage from '../pageobjects/documentSigned.page';
import FormPage from '../pageobjects/form.page';

describe('Signing Document Page', () => {
    const formPage = new FormPage();
    const documentSignedPage = new DocumentSignedPage();

    before(async () => {
        await formPage.open(); // Открываем страницу перед выполнением тестов
    });

    // after(async () => {
    //     await browser.deleteSession(); // Закрываем сессию браузера после всех тестов
    // });

    it('should sign the document page', async () => {

        // Проверяем заголовок страницы
        // const title = await browser.getTitle();
        // expect(title).toContain('Expected Page Title');

        // Кликаем по стрелке и ожидаем появления секции "About You"

        await formPage.clickArrow();
        const aboutYouSection = $('div.section.extradetails');
        await aboutYouSection.isDisplayed();

        // Заполняем имя
        await formPage.fillFullName();

        // Ожидаем появления кнопки "Next" и кликаем по ней
        await formPage.nextButton.isDisplayed();
        await formPage.clickNextButton();

        // Делаем скриншот модального окна
        await formPage.makeModalScreenshot();
        // Подписываем документ
        await formPage.signDocument();


        // Ожидаем текст "Document Signed" на новой странице
        await documentSignedPage.waitForConfirmationText();
        
        // Проверка текста с использованием правильного метода
        await expect(documentSignedPage.confirmationTextElement).toHaveText('Document signed!');
    });

});
