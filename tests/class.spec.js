import { test, expect } from '@playwright/test';
import { UserBuilder } from '../src/helpers/builders/user.builder';
import { MainPage } from '../src/helpers/builders/pages/main.page';
import { RegisterPage } from '../src/helpers/builders/pages/register.page';
import { YourFeedPage } from '../src/helpers/builders/pages/yourfeed.page';

test('Авторизованный пользователь может просмотреть список статей', async ({
	page,
}) => {
	// Готовим страницы
	const mainPage = new MainPage(page);
	const registerPage = new RegisterPage(page);
	const yourFeedPage = new YourFeedPage(page);

	// Act
	const randomUser = new UserBuilder()
		.addEmail()
		.addPassword(14)
		.addUsername()
		.generate();

	await mainPage.open();
	await mainPage.gotoLogin();
	await registerPage.signup(randomUser);
	await expect(yourFeedPage.profileNameField).toContainText(
		randomUser.username,
	);
});