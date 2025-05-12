import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    // Поиск элемента по типу
  await page.goto('file:///C:/Users/Admin/Documents/demo.html');
  await page.getByRole('textbox', { name: 'Email' }).fill('tesssa@ya.ru');
  await page.getByRole('textbox', { name: 'Пароль' }).fill('123456');
  await page.getByRole('button', { name: 'Войти' }).click();
});

test.skip('test Class', async ({ page }) => {
    // Поиск элемента по классу
  await page.goto('file:///C:/Users/Admin/Documents/demo.html');
  /* Разобраться с классом
  await page.locator('.el-input__inner:first-child', { name: 'Email' }).fill('tesssa@ya.ru');*/

  await page.locator('.el-input', 'text=Playwright').fill('tesssa@ya.ru');
  await page.locator('.el-input__inner', { name: 'Пароль' }).fill('123456');
  await page.locator('.el-button', { name: 'Пароль' }).click();
});

/*
  await expect(page.locator('span')).toMatchAriaSnapShot(`- text: Войти`);*/

  test('test by ID', async ({ page }) => {
    // Поиск элемента по ID
  await page.goto('file:///C:/Users/Admin/Documents/demo.html');

  await page.locator('#email').fill('tesssa@ya.ru');
  await page.locator('#password').fill('123456');
  await page.getByRole('button', { name: 'Войти' }).click();
});

test.skip('test form', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Tttttt');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Eeeee');
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('test@rr.com');
  await page.getByText('Female').click();
  await page.getByRole('textbox', { name: 'Mobile Number' }).click();
  await page.getByRole('textbox', { name: 'Mobile Number' }).fill('+793130836');
  await page.locator('#dateOfBirthInput').click();
  await page.locator('div').filter({ hasText: /^JanuaryFebruaryMarchAprilMayJuneJulyAugustSeptemberOctoberNovemberDecember$/ }).getByRole('combobox').selectOption('9');
  await page.getByRole('option', { name: 'Choose Tuesday, October 7th,' }).click();
  await page.locator('#dateOfBirthInput').click();
  await page.getByRole('combobox').nth(1).selectOption('2006');
  await page.getByRole('option', { name: 'Choose Tuesday, October 10th,' }).click();
  await page.getByText('Sports').click();
  await page.getByText('Music').click();
  await page.getByRole('textbox', { name: 'Current Address' }).click();
  await page.getByRole('textbox', { name: 'Current Address' }).fill('my adress');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('textbox', { name: 'Mobile Number' }).click();
  await page.getByRole('textbox', { name: 'Mobile Number' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Mobile Number' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Mobile Number' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Mobile Number' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Mobile Number' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Mobile Number' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Mobile Number' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Mobile Number' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Mobile Number' }).fill('93130836');
  await page.getByRole('textbox', { name: 'Mobile Number' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Mobile Number' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Mobile Number' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Mobile Number' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Mobile Number' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Mobile Number' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Mobile Number' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Mobile Number' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Mobile Number' }).fill('9313083646');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByRole('cell', { name: 'Values' })).toBeVisible();
  await expect(page.locator('tbody')).toContainText('Sports, Music');
  await expect(page.locator('tbody')).toContainText('test@rr.com');
  await expect(page.locator('tbody')).toMatchAriaSnapshot(`- cell "Student Name"`);
  await expect(page.locator('tbody')).toMatchAriaSnapshot(`- cell "Tttttt Eeeee"`);
});



