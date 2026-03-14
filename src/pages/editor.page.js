export class EditorPage {
  constructor(page) {
    this.page = page;

    this.titleInput = page.getByPlaceholder("Article Title");
    this.descriptionInput = page.getByPlaceholder("What's this article about?");
    this.bodyInput = page.getByPlaceholder("Write your article (in markdown)");
    this.tagsInput = page.getByPlaceholder("Enter tags");
    this.publishButton = page.getByRole("button", { name: "Publish Article" });

  }

  // создание новой статьи
  async createArticle(article) {

    const { title, description, body, tag } = article;

    await this.titleInput.click();
    await this.titleInput.fill(title);
    await this.descriptionInput.click();
    await this.descriptionInput.fill(description);
    await this.bodyInput.click();
    await this.bodyInput.fill(body);
    await this.tagsInput.click();
    await this.tagsInput.fill(tag);
    await this.publishButton.click();
    // TODO созданная статья долго прогружается
    await this.page.waitForTimeout(5000);

  }

}