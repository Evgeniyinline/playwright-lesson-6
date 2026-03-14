export class ArticlePage {
  constructor(page) {
    this.page = page;

    this.articleName = page.locator('h1');
     
  }

  // получение имени статьи
  getArticleName() {
    return this.articleName;
    
  }

}