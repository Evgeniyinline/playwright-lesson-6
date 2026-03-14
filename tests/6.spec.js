import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";

import { MainPage } from "@/pages/main.page";
import { RegisterPage } from "@/pages/register.page";
import { YourFeedPage } from "@/pages/yourfeed.page";

let user = {
  email: faker.internet.email(),
  password: faker.internet.password(),
  username: faker.person.lastName(),
};

// регистрация нового пользователя
test("пользователь может зарегистрироваться", async ({ page }) => {
  const mainPage = new MainPage(page);
  const register = new RegisterPage(page);
  const yourFeed = new YourFeedPage(page);

  await mainPage.open();
  await mainPage.gotoRegister();
  await register.signUp(user);
  await expect(yourFeed.getProfileName()).toContainText(user.username);
});
