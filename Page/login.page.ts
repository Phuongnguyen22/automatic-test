import { Page } from "@playwright/test";
import { loginpage } from '../playwrightwrapper';
export default class LoginPage {
  private base: PlaywrightWrapper;
  private loginPage: Page;

  constructor(page: Page) {
    this.base = new PlaywrightWrapper(page);
    this.loginPage = page;
  }

  private Element = {
    loginButton: "#login-button",
    username: "#username",
    password: "#password",
  };
}
