export class ArticlePage {
  constructor(page) {
    this.page = page;

    this.articleName = page.locator('h1');
    this.deleteButton = page.getByRole("button", { name: "Delete Article" });
    this.editButton = page.getByRole("button", { name: "Edit Article" });

  }

  // получение имени статьи
  getArticleName() {
    return this.articleName;
    
  }

    // удаление статьи + ожидание браузерного диалога
  async deleteArticle() {
    await this.page.once('dialog', async dialog => {
      await dialog.accept();
    });

    await this.deleteButton.first().click();

  }

  // переход к редактированию статьи
  async editArticle() {
    await this.editButton.first().click();
  }

}