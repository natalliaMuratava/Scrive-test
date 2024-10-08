import { browser } from '@wdio/globals';
import fs from 'fs';
import path from 'path';

export default class FormPage {
    private url: string = 'https://staging.scrive.com/t/9221714692410699950/7348c782641060a9'; // URL страницы
    private screenshotDir: string = path.join(__dirname, 'screenshots');

    get arrowText() {
        return $('.arrowtext'); // Селектор для текста стрелки
    }

    get fullNameInput() {
        return $('input#name'); // Селектор для инпута имени
    }

    get nextButton() {
        return $('a[role="button"] span'); // Селектор для кнопки "Next"
    }

    get modal() {
        return $('.section.sign.above-overlay'); // Селектор для модального окна
    }

    get signButton() {
        return $('a.sign-button'); // Селектор для кнопки подписания
    }

    get confirmationTextElement() {
        return $('h1.follow span'); // Селектор для элемента подтверждения
    }

    public async open() {
        await browser.url(this.url); // Открытие страницы
    }

    public async clickArrow() {
        await this.arrowText.isDisplayed(); // Ждем, чтобы стрелка стала кликабельной
        await this.arrowText.click(); // Кликаем по стрелке
    }

    public async fillFullName() {
        await this.fullNameInput.isDisplayed(); // Ожидаем, что инпут будет видим
        await this.fullNameInput.setValue("Natallia"); // Заполняем инпут
    }

    public async clickNextButton() {
        await this.nextButton.isDisplayed(); // Ждем, чтобы кнопка стала кликабельной
        await this.nextButton.click(); // Кликаем по кнопке "Next"
    }

    public async makeModalScreenshot() {
        if (!fs.existsSync(this.screenshotDir)) { // Проверяем, существует ли директория для скриншотов
            fs.mkdirSync(this.screenshotDir); // Если нет, создаем её
        }

        await this.modal.isDisplayed(); // Ожидаем, пока модальное окно станет видимым

        const screenshotPath = path.join(this.screenshotDir, 'confirmation-modal.png'); // Путь для скриншота
        await this.modal.saveScreenshot(screenshotPath); // Сохраняем скриншот
    }

    public async signDocument() {
        await this.signButton.isDisplayed(); // Ждем, чтобы кнопка подписания стала кликабельной
        await this.signButton.click(); // Кликаем по кнопке подписания
    }
}
