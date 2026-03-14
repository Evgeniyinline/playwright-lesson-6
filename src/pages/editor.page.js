export class EditorPage {
  constructor(page) {
    this.page = page;

    this.titleInput = page.getByPlaceholder("Article Title");
    this.descriptionInput = page.getByPlaceholder("What's this article about?");
    this.bodyInput = page.getByPlaceholder("Write your article (in markdown)");
    this.tagsInput = page.getByPlaceholder("Enter tags");
    this.publishButton = page.getByRole("button", { name: "Publish Article" });
    this.updateButton = page.getByRole("button", { name: "Update Article" });

  }

  // заполнение формы статьи
  async fillArticleForm(article) {
    const { title, description, body, tag } = article;

    await this.titleInput.fill(title);
    await this.descriptionInput.fill(description);
    await this.bodyInput.fill(body);
    await this.tagsInput.fill(tag);
  }

  // создание новой статьи
  async createArticle(article) {
    await this.fillArticleForm(article);
    await this.publishButton.click();
    await this.page.waitForLoadState('networkidle');
}

  // обновление статьи
  async updateArticle(article) {
    await this.fillArticleForm(article);
    await this.updateButton.click();
    await this.page.waitForLoadState('networkidle');
}

}