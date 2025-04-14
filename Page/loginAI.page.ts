
import { Page } from 'playwright';
import { expect } from '@playwright/test';


export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(url: string) {
    await this.page.goto(url, { timeout: 20000 }); 
  }
  async clickButton(buttonName: string) {
    const locators: Record<string, string> = {
      'Continue with Microsoft Account': "//button[contains(., 'Continue with Microsoft Account')]",
      'Next': "//input[@id='idSIButton9']",
      'Sign in': "//input[@id='idSIButton9']",
      'Yes': "//input[@id='idSIButton9']",
    };

    const locator = locators[buttonName];
    await this.page.locator(locator).click();
  }

  async enterEmail(email: string) {
    await this.page.locator("//input[@id='i0116']").fill(email);
  }

  async enterPassword(password: string) {
    await this.page.locator("//input[@id='i0118']").fill(password);
  }

  async verifyLoginFailurewithPasswordinvaild() {
    const errorMessage = this.page.locator('//*[@id="passwordError"]');
    await expect(errorMessage).toContainText(
      "Your account or password is incorrect. If you don't remember your password,"
    , { timeout: 5000 });
  }  
async verifyLoginFailurewithEmailinvaild() {
  const errorMessage = this.page.locator('//*[@id="usernameError"]');
  await expect(errorMessage).toContainText(
    "This username may be incorrect. Make sure you typed it correctly. Otherwise, contact your admin.",
    { timeout: 5000 });
  }
}