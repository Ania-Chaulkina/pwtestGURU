import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

const register = async (page, randomUser) => {
  await page.goto('https://realworld.qa.guru/');
  let { username, email, password} = randomUser;

 /* {
    username: 'Garett_Parisian',
    email: 'Estella_Huels78@hotmail.com',
    password: 'w2zXWf8bobELAc7'
  }*/

  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByRole('textbox', { name: 'Your Name' }).click();
  /* Способ 1
  await page.getByRole('textbox', { name: 'Your Name' }).fill(randomUser.username);*/

  await page.getByRole('textbox', { name: 'Your Name' }).fill(username);
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(email);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(password);
  await page.getByRole('button', { name: 'Sign up' }).click();
  };

  const getRandomUser = () => {
    
    const randomUser = {
        username: faker.internet.username(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
     
  return randomUser;
  };

test('авторизация через логин и пароль2', async ({ page }) => {
    const randomUser = getRandomUser();
    console.log(randomUser);
    await register (page, randomUser);
    await page.screenshot({ path: 'Error.png', fullPage: true });
    await expect(page.getByRole('navigation')).toContainText(randomUser.username);  
  }); 

  test('Демонстрация работы filter', async ({ page }) => {
	await page.goto('https://realworld.qa.guru/');
	await page.waitForLoadState('networkidle');
	const filteredArticles = await page
		.locator('.article-preview')
		.filter({
			hasText: 'Gustave', // ищет текст в любом месте элемента или его потомков
		})
		.click();
	//await expect(page.getByRole("navigation")).toContainText(username);
	//	await page.screenshot({ path: 'screenshot1.png' });
});