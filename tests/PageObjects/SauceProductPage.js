const { expect } = require('@playwright/test');

class SauceProductPage {
    constructor(page) {
        this.page = page;
        this.cartLink = page.locator('.shopping_cart_link');
        this.checkoutButton = page.locator('[data-test="checkout"]');
        this.firstNameInput = page.locator('[data-test="firstName"]');
        this.lastNameInput = page.locator('[data-test="lastName"]');
        this.postalCodeInput = page.locator('[data-test="postalCode"]');
        this.continueButton = page.locator('[data-test="continue"]');
        this.finishButton = page.locator('[data-test="finish"]');
        this.orderCompleteHeader = page.locator('.complete-header');
        this.orderCompleteText = page.locator('.complete-text');
    }

    addToCartButton(productName) {
        return this.page.locator(`.inventory_item:has-text("${productName}") button.btn_inventory`);
    }

    async addProductToCart(productName) {
        await this.addToCartButton(productName).click();
    }

    async openCart() {
        await this.cartLink.click();
    }

    async startCheckout() {
        await this.checkoutButton.click();
    }

    async enterCheckoutInformation(firstName, lastName, postalCode) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
        await this.continueButton.click();
    }

    async finishCheckout() {
        await this.finishButton.click();
    }

    async expectOrderComplete() {
        await expect(this.orderCompleteHeader).toHaveText('THANK YOU FOR YOUR ORDER');
        await expect(this.orderCompleteText).toContainText('Your order has been dispatched');
    }
}

module.exports = SauceProductPage;
