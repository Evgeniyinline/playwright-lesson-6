export class MyProfilePage {
  constructor(page) {
    this.page = page;

    this.myProfileName = page.locator('h4');
    this.myArticlePreview = page.locator('.article-preview');
     
  }

  // получаем имя пользователя из его профиля
  getMyProfileName() {
    return this.myProfileName;

  }
  
  // получаем статью по ее заголовку из списка статей пользователя
  getMyArticleByTitle(title) {
    return this.myArticlePreview.filter({ hasText: title });

  }

}