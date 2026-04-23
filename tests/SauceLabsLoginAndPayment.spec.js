const { test, expect } = require('@playwright/test');
const SauceLoginPage = require('./PageObjects/SauceLoginPage');
const SauceProductPage = require('./PageObjects/SauceProductPage');

test.describe('Sauce Labs login and payment flow', () => {
    test('Valid user login and payment flow', async ({ page }) => {
        const loginPage = new SauceLoginPage(page);
        const productPage = new SauceProductPage(page);

        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');
        await loginPage.expectLoggedIn();

        await productPage.addProductToCart('Sauce Labs Bike Light');
        await productPage.openCart();
        await productPage.startCheckout();
        await productPage.enterCheckoutInformation('Test', 'User', '12345');
        await productPage.finishCheckout();
        await productPage.expectOrderComplete();
    });

    test('Invalid user login shows error message', async ({ page }) => {
        const loginPage = new SauceLoginPage(page);

        await loginPage.goto();
        await loginPage.login('invalid_user', 'wrong_password');
        await loginPage.expectLoginError('Epic sadface: Username and password do not match any user in this service');
    });
});
