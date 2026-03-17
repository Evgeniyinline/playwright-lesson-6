export class MainPage {
  constructor(page) {
    this.page = page;

    this.signUpLink = page.getByRole("link", { name: "Sign up" });
    this.signInLink = page.getByRole("link", { name: "Login" });
    this.checkArticles = page.locator(".article-preview");
    this.tag = page.locator(".sidebar .tag-list .tag-pill");
    this.checkTagActive = page.locator(".feed-toggle .nav-link.active");
    this.newArticle = page.getByRole("link", { name: "New Article" });
    this.profileDropdown = page.locator(".nav-link.dropdown-toggle");
    this.profileLink = page.getByRole("link", { name: "Profile" });
    this.settingsLink = page.getByRole("link", { name: "Settings" });

  }

  // переход на страницу создания новой статьи
  async gotoNewArticle() {
    await this.newArticle.click();

  }

  // переход на страницу регистрации
  async gotoRegister() {
    await this.signUpLink.click();

  }

  // переход на страницу авторизации
  async gotoLogin() {
    await this.signInLink.click();

  }

  // переход на первую статью из списка статей
  async gotoCheckArticles() {
    await this.checkArticles.first().click();

  }

  // клик на первый тег из списка тегов
  async clickFirstTag() {
    await this.tag.first().click();

  }

  // получаем активный тег из списка тегов
  getActiveTag() {
    return this.checkTagActive;

  }

  // переход на страницу профиля пользователя
  async gotoProfile() {
    await this.profileDropdown.click();
    await this.profileLink.click();

  }

  // переход на страницу настроек пользователя
  async gotoSettings() {
    await this.profileDropdown.click();
    await this.settingsLink.click();

  }

  // открытие главной страницы
  async open() {
    await this.page.goto("https://realworld.qa.guru/");

  }

}