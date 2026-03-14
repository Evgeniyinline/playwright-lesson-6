import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

const URL = 'https://realworld.qa.guru/';

async function gotoUrl (page) {
  await page.goto(URL);
  return page;
}
// todo реализовать функцией получение случайного email
test('homework-1', async ({ page }) => {

  function generateUser() {
    const mail = faker.internet.email();
    const name = faker.person.lastName();
    const password = faker.internet.password();

    return { mail, name, password };
  }

  await gotoUrl(page);
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByRole('textbox', { name: 'Your Name' }).fill(generateUser().name); 
  await page.getByRole('textbox', { name: 'Email' }).fill(generateUser().mail);
  await page.getByRole('textbox', { name: 'Password' }).fill(generateUser().password);
  await page.getByRole('button', { name: 'Sign up' }).click();
  await expect(page.getByRole('navigation')).toContainText(generateUser().name);
  //  await expect(page.getByText(generateUser.name).toBeVisible());
  
});


test('homework-1 bad auth', async ({ page }) => {

const EMAIL = `longlimp@gmail.com`;
let password = `123456789`;


  await page.goto(URL);
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByRole('textbox', { name: 'Your Name' }).fill(NAME); 
  await page.getByRole('textbox', { name: 'Email' }).fill(EMAIL);
  await page.getByRole('textbox', { name: 'Password' }).fill(password);
  await page.getByRole('button', { name: 'Sign up' }).click();
  await expect(page.getByText('Email or password is incorrect')).toBeVisible();
  
  
});