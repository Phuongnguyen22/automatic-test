
import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import { expect } from '@playwright/test';

let browser: Browser;
let page: Page;


Given('I open the browser', async function () {
  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
});

When('I navigate to {string}', async function (url: string) {
  await page.goto(url);
});
When('I click on {string} button', async (buttonName: string) => {
  const locators: Record<string, string> = {
    'Continue with Microsoft Account': "//button[contains(., 'Continue with Microsoft Account')]",
    'Next': "//input[@id='idSIButton9']",
    'Sign in': "//input[@id='idSIButton9']",
    'Yes': "//input[@id='idSIButton9']"
  };

  const locator = locators[buttonName];
  await page.locator(locator).click();
});

When('I enter email {string}', async function (email: string) {
  await page.locator("//input[@id='i0116']").fill(email);
});

Then('if invalid email is entered, verify the error message for email', async function () {
  if (this.caseType === 'invalidEmail') {
    const errorMessage = page.locator('#emailError');
    await expect(errorMessage).toBeVisible({ timeout: 5000 });
  }
});

When('I enter password {string}', async function (password: string) {
  await page.locator("//input[@id='i0118']").fill(password);
});

Then('I should be logged in successfully', async function () {
  await page.waitForURL('https://ai.politetech.com/');
});

Then('if invalid password is entered, verify the error message for password', async function () {
  if (this.caseType === 'invalidPassword') {
    const errorMessage = page.locator('#passwordError');
    await expect(errorMessage).toBeVisible({ timeout: 5000 });
  }
});
