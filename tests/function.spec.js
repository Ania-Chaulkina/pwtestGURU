import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

//Всего 4 типа функций
//Первый: function declaration
async function registerRandomUser (page, name, email, password) {
    await page.goto('https://realworld.qa.guru/');
    await page.getByRole('link', { name: 'Sign up' }).click();
    await page.getByRole('textbox', { name: 'Your Name' }).click();
    await page.getByRole('textbox', { name: 'Your Name' }).fill(faker.internet.username());
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill(faker.internet.email());
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill(pfaker.internet.password());
    await page.getByRole('button', { name: 'Sign up' }).click();
};

//Второй: function expression
    const registerRandomUserVersion2 = async (page) => {
      const username = faker.internet.username();
    await page.goto('https://realworld.qa.guru/');
    await page.getByRole('link', { name: 'Sign up' }).click();
    await page.getByRole('textbox', { name: 'Your Name' }).click();
    await page.getByRole('textbox', { name: 'Your Name' }).fill(username);
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill(faker.internet.email());
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill(faker.internet.password());
    await page.getByRole('button', { name: 'Sign up' }).click();
    return username;
    };


//Третий: arrow function - стрелочная функция const greet = (name) => `Hello, $(name)!`;
/*Четвертый: IIFE - (function () {
console.log('запуск сразу после объявления');
}) */

test('авторизованый пользователь может посмотреть список статей', async ({ page }) => {
  const username = await registerRandomUserVersion2 (page);

    /*Для скрина где стопается тест
    await page.screenshot({ path: 'Error.png', fullPage: true }); */
    await expect(page.getByRole('navigation')).toContainText(username);  
  });


  test('авторизация через логин и пароль', async ({ page }) => {
    const username = await registerRandomUserVersion2 (page);
    await expect(page.getByRole('navigation')).toContainText(username);  
  });