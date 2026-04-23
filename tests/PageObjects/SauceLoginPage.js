const { expect } = require('@playwright/test');

class SauceLoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.errorMessage = page.locator('.error-message-container');
        this.inventoryContainer = page.locator('.inventory_list');
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async expectLoggedIn() {
        await this.inventoryContainer.waitFor({ state: 'visible' });
        await this.page.waitForURL('**/inventory.html');
    }

    async expectLoginError(message) {
        await expect(this.errorMessage).toBeVisible();
        await expect(this.errorMessage).toContainText(message);
    }
}

module.exports = SauceLoginPage;
