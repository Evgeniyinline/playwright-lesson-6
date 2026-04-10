export class LoginPage {
  constructor(page) {
    this.page = page;

    this.emailInput = page.getByRole('textbox', { name: 'Email' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.signInButton = page.getByRole('button', { name: 'Login' });

  }

  // авторизация через статичного юзера из .env
  async signInStaticUser() {
    await this.emailInput.fill('pw-lesson6eorlov@test.com');
    await this.passwordInput.fill('pw-lesson6eorlov@test.com');
    await this.signInButton.click();

  }

}