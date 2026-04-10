import { test, expect } from '@playwright/test';

test('client app login', async ({ page }) => {
    const productName = 'ZARA COAT 3';
    const email = "prakashsonawane95@gmail.com";
    const products = page.locator(".card-body");
    await page.goto('https://rahulshettyacademy.com/client/');
    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").fill("Automation@1111");

    await page.locator("[value='Login']").click();

    await page.waitForLoadState('networkidle');

    await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();
    await page.pause();
    console.log(titles);
    const count = await products.count();
    for (let i = 0; i < count; i++) {
        products.nth(i);
        console.log(products.first());
        console.log(products.last());

        if (await products.nth(i).locator("b").textContent() === productName) {
            await products.nth(i).locator("text= Add To Cart").click();
            break;
        }
    }

    await page.locator("routerlink*='cart']").click();

    const bool = page.locator("h3:has-text('ZARA COAT 3')").isVisible();
    expect(bool).toBeTruthy();

    await page.locator("text=checkout").click();

    await page.locator("[placeholder*='Country']").pressSequentially("ind", { delay: 100 });

    const dropdn = page.locator(".ta-result");

    await dropdn.waitFor();

    optioncount = await dropdn.locator("button").count();
    for (let i = 0; i < optioncount; ++i) {
        text = await dropdn.locator("button").nth(i)(textContent());
        if (text === " India") {
            await dropdn.locator("button").nth(i).click();
            break;
        }
    }

    await page.pause();

    expect(page.locator(".user__name[Type='text']").first()).toHaveText(email);

    await page.locator(".action__submit").click();

    await expect(page.locator(".hero-primary")).toHaveText("thankyou for the order. ");




})


