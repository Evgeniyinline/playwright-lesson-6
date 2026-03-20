import { MainPage, RegisterPage, YourFeedPage, ArticlePage, LoginPage, EditorPage, MyProfilePage, MySettingsPage } from "@/pages/index.js";

// фасад РО
export class App {
  constructor (page) {
    this.page = page;

    this.mainPage = new MainPage(page);
    this.registerPage = new RegisterPage(page);
    this.yourFeedPage = new YourFeedPage(page);
    this.articlePage = new ArticlePage(page);
    this.loginPage = new LoginPage(page);
    this.editorPage = new EditorPage(page);
    this.myProfilePage = new MyProfilePage(page);
    this.mySettingsPage = new MySettingsPage(page);
    
  }

}