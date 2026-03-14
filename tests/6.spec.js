import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";

import { MainPage } from "@/pages/main.page";
import { RegisterPage } from "@/pages/register.page";
import { YourFeedPage } from "@/pages/yourfeed.page";
import { ArticlePage } from "@/pages/article.page";
import { LoginPage } from "@/pages/login.page";
import { EditorPage } from "@/pages/editor.page";
import { MyProfilePage } from "@/pages/profile.page";
import { MySettingsPage } from "@/pages/settings.page";

// генерация нового пользователя при регистрации
let user = {
  email: faker.internet.email(),
  password: faker.internet.password(),
  username: faker.person.lastName(),
  bio: faker.person.bio(),
};

// генерация новой статьи при публикации
let myArticle = {
  title: faker.lorem.sentence(),
  description: faker.lorem.sentence(),
  body: faker.lorem.paragraph(),
  tag: faker.lorem.word(),
}

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

// неавторизованный пользователь может смотреть статьи
test("не авторизованный пользователь может смотреть статьи", async ({ page }) => {
  
  const mainPage = new MainPage(page);
  const article = new ArticlePage(page);

  await mainPage.open();
  await mainPage.gotoCheckArticles();
  await expect(article.getArticleName()).toBeVisible();

});

// проверка фильтрации ленты по первому тегу из списка
test("фильтрация по выбранному тегу", async ({ page }) => {
  
  const mainPage = new MainPage(page);

  await mainPage.open();
  await mainPage.clickFirstTag();
  await expect(mainPage.getActiveTag()).toBeVisible();

});

// авторизация через статичного юзера из .env
test("авторизованный пользователь может написать статью", async ({ page }) => {
  
  const mainPage = new MainPage(page);
  const login = new LoginPage(page);
  const yourFeed = new YourFeedPage(page);
  const article = new ArticlePage(page);
  const editor = new EditorPage(page);

  await mainPage.open();
  await mainPage.gotoLogin();
  await login.signInStaticUser();
  await expect(yourFeed.getStaticName()).toBeVisible();
  await mainPage.gotoNewArticle();
  await editor.createArticle(myArticle);
  await expect(article.getArticleName()).toContainText(myArticle.title);

}); 

// через регистрацию нового пользователя
test("пользователь прошедший регистрацию может написать статью", async ({ page }) => {
  
  const mainPage = new MainPage(page);
  const yourFeed = new YourFeedPage(page);
  const article = new ArticlePage(page);
  const editor = new EditorPage(page);
  const register = new RegisterPage(page);

  await mainPage.open();
  await mainPage.gotoRegister();
  await register.signUp(user);
  await expect(yourFeed.getProfileName()).toContainText(user.username);
  await mainPage.gotoNewArticle();
  await editor.createArticle(myArticle);
  await expect(article.getArticleName()).toContainText(myArticle.title);

}); 

// написанная статья отображается в профиле пользователя
test("пользователь может увидеть свою статью в своем профиле", async ({ page }) => {
  
  const mainPage = new MainPage(page);
  const editor = new EditorPage(page);
  const register = new RegisterPage(page);
  const myProfile = new MyProfilePage(page);

  await mainPage.open();
  await mainPage.gotoRegister();
  await register.signUp(user);
  await mainPage.gotoNewArticle();
  await editor.createArticle(myArticle);
  await mainPage.gotoProfile();
  await expect(myProfile.getMyArticleByTitle(myArticle.title)).toBeVisible();

}); 

// зарегистрированный пользователь может сменить имя/почту/пароль
test("обновление данных после регистрации", async ({ page }) => {
  
  const mainPage = new MainPage(page);
  const register = new RegisterPage(page);
  const mySettings = new MySettingsPage(page);

  await mainPage.open();
  await mainPage.gotoRegister();
  await register.signUp(user);
  await mainPage.gotoSettings();
  await mySettings.updateSettings(user);
  await expect(mySettings.getProfileName()).toHaveValue(user.username);

});