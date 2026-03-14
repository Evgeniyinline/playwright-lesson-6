export class YourFeedPage {
  constructor(page) {
    this.page = page;
    this.profileName = page.locator('.dropdown-toggle');
    this.staticName = page.locator('.dropdown-toggle',{ name: process.env.NAME });

  }
  // получаем имя пользователя из выпадающего меню
  getProfileName() {
    return this.profileName;

  }
  // получаем статическое имя пользователя из выпадающего меню
  getStaticName() {
    return this.staticName;

  }

}


