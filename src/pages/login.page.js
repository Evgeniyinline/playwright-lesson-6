export class LoginPage {
  constructor(page) {
    this.page = page;

    this.emailInput = page.getByRole('textbox', { name: 'Email' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.signInButton = page.getByRole('button', { name: 'Login' });

  }

  // авторизация через статичного юзера из .env
  async signInStaticUser() {
    await this.emailInput.fill(process.env.EMAIL);
    await this.passwordInput.fill(process.env.PASSWORD);
    await this.signInButton.click();

  }

}