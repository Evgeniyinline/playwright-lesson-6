import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

const URL = 'https://realworld.qa.guru/';

async function gotoUrl (page) {
  await page.goto(URL);
  return page;
}

let user = {
  email: faker.internet.email(),
  password: faker.internet.password(),
  username: faker.person.lastName()
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
  await expect(page.getByRole('navigation')).toContainText(user.username);
  //  await expect(page.getByText(generateUser.name).toBeVisible());
  
});
test('homework-1 v2', async ({ page }) => {
// деструктуризаия 
  // username = user.username;
  // password = user.password;
  // email = user.email;

const {username, password, email} = user;

  await gotoUrl(page);
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByRole('textbox', { name: 'Your Name' }).fill(username); 
  await page.getByRole('textbox', { name: 'Email' }).fill(email);
  await page.getByRole('textbox', { name: 'Password' }).fill(password);
  await page.getByRole('button', { name: 'Sign up' }).click();
  await expect(page.getByRole('navigation')).toContainText(username);
  //  await expect(page.getByText(generateUser.name).toBeVisible());
  
});