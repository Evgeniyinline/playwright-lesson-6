import { test, expect } from "@playwright/test";

import { App } from "@/pages/app.page.js";
import { UserBuilder, ArticleBuilder } from "@/helpers/builders/index.js";

// регистрация нового пользователя
test("пользователь может зарегистрироваться", async ({ page }) => {

  const app = new App(page);
  const user = new UserBuilder().withEmail().withPassword().withUsername().build();

  await app.mainPage.open();
  await app.mainPage.gotoRegister();
  await app.registerPage.signUp(user);
  await expect(app.yourFeedPage.getProfileName()).toContainText(user.username);   

});

// неавторизованный пользователь может смотреть статьи
test("не авторизованный пользователь может смотреть статьи", async ({ page }) => {
  
  const app = new App(page);

  await app.mainPage.open();
  await app.mainPage.gotoCheckArticles();
  await expect(app.articlePage.getArticleName()).toBeVisible();

});

// проверка фильтрации ленты по первому тегу из списка
test("фильтрация по выбранному тегу", async ({ page }) => {
  
  const app = new App(page);

  await app.mainPage.open();
  await app.mainPage.clickFirstTag();
  await expect(app.mainPage.getActiveTag()).toBeVisible();

});

// авторизация через статичного юзера из .env
test("авторизованный пользователь может написать статью", async ({ page }) => {
  
  const app = new App(page);
  const articleData = new ArticleBuilder().withTitle().withDescription().withBody().withTag().build();
  
  await app.mainPage.open();
  await app.mainPage.gotoLogin();
  await app.loginPage.signInStaticUser();
  await expect(app.yourFeedPage.getStaticName()).toBeVisible();
  await app.mainPage.gotoNewArticle();
  await app.editorPage.createArticle(articleData);
  await expect(app.articlePage.getArticleName()).toContainText(articleData.title);

}); 

// через регистрацию нового пользователя
test("пользователь прошедший регистрацию может написать статью", async ({ page }) => {
  
  const app = new App(page);
  const user = new UserBuilder().withEmail().withPassword().withUsername().build();
  const articleData = new ArticleBuilder().withTitle().withDescription().withBody().withTag().build();

  await app.mainPage.open();
  await app.mainPage.gotoRegister();
  await app.registerPage.signUp(user);
  await expect(app.yourFeedPage.getProfileName()).toContainText(user.username);
  await app.mainPage.gotoNewArticle();
  await app.editorPage.createArticle(articleData);
  await expect(app.articlePage.getArticleName()).toContainText(articleData.title);

}); 

// написанная статья отображается в профиле пользователя
test("пользователь может увидеть свою статью в своем профиле", async ({ page }) => {
  
  const app = new App(page);
  const user = new UserBuilder().withEmail().withPassword().withUsername().build();
  const articleData = new ArticleBuilder().withTitle().withDescription().withBody().withTag().build();

  await app.mainPage.open();
  await app.mainPage.gotoRegister();
  await app.registerPage.signUp(user);
  await expect(app.yourFeedPage.getProfileName()).toContainText(user.username);
  await app.mainPage.gotoNewArticle();
  await app.editorPage.createArticle(articleData);
  await app.mainPage.gotoProfile();
  await expect(app.myProfilePage.getMyArticleByTitle(articleData.title)).toBeVisible();

}); 

// зарегистрированный пользователь может сменить имя/почту/пароль
test("смена имени после регистрации", async ({ page }) => {
  
  const app = new App(page);
  const user = new UserBuilder().withEmail().withPassword().withUsername().withBio().build();

  await app.mainPage.open();
  await app.mainPage.gotoRegister();
  await app.registerPage.signUp(user);
  await app.mainPage.gotoSettings();
  await app.mySettingsPage.updateSettings(user);
  await expect(app.mySettingsPage.getProfileName()).toHaveValue(user.username);
  await app.mainPage.gotoProfile();
  await expect(app.myProfilePage.getProfileName()).toHaveText(user.username); 

});

// написанную статью можно удалить
test("после создания статью можно удалить", async ({ page }) => {
  
  const app = new App(page);

  const userData = new UserBuilder().withEmail().withPassword().withUsername().build();
  const articleData = new ArticleBuilder().withTitle().withDescription().withBody().withTag().build(); 

  await app.mainPage.open();
  await app.mainPage.gotoRegister();
  await app.registerPage.signUp(userData);
  await app.mainPage.gotoNewArticle();
  await app.editorPage.createArticle(articleData);
  await expect(app.articlePage.getArticleName()).toContainText(articleData.title);
  await app.articlePage.deleteArticle();
  await expect(app.articlePage.getArticleName()).toBeHidden();

}); 

// написанную статью можно изменить
test("созданную статью можно изменить", async ({ page }) => {
  
  const app = new App(page);

  const userData = new UserBuilder().withEmail().withPassword().withUsername().build();
  const articleData = new ArticleBuilder().withTitle().withDescription().withBody().withTag().build();
  
  await app.mainPage.open();
  await app.mainPage.gotoRegister();
  await app.registerPage.signUp(userData);
  await app.mainPage.gotoNewArticle();  
  await app.editorPage.createArticle(articleData);
  await expect(app.articlePage.getArticleName()).toContainText(articleData.title);
  await app.articlePage.editArticle();
  await app.editorPage.updateArticle(articleData);
  await expect(app.articlePage.getArticleName()).toContainText(articleData.title);

}); 