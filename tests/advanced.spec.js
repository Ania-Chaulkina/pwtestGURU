import { test, expect } from '@playwright/test';
import { UserBuilder } from '../src/helpers/builders/user.builder';
import { App } from '../src/pagesV3/app.page';

test('Авторизованный пользователь может просмотреть список статей', async ({
	page,
}) => {
	const randomUser = new UserBuilder()
		.addEmail()
		.addPassword(14)
		.addUsername()
		.generate(); 
	let app = new App(page);

	await app.main.open();
	await app.main.gotoLogin();
});