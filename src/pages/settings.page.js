export class MySettingsPage {
  constructor(page) {
    this.page = page;

    this.nameInput = page.getByPlaceholder("Your Name");
    this.bioInput = page.getByPlaceholder("Short bio about you");
    this.emailInput = page.getByPlaceholder("Email");
    this.passwordInput = page.getByPlaceholder("Password");
    this.updateButton = page.getByRole("button", { name: "Update Settings" });
  }
  // обновляем настройки пользователя
  async updateSettings(user) {
    const {username, email, password, bio} = user;

    await this.nameInput.click();
    await this.nameInput.fill(username);
    await this.bioInput.click();
    await this.bioInput.fill(bio);
    await this.emailInput.click();
    await this.emailInput.fill(email);
    await this.passwordInput.click();
    await this.passwordInput.fill(password);
    await this.updateButton.click();

  }
  // получаем имя пользователя из поля ввода
  getProfileName() {
    return this.nameInput;

  }

}