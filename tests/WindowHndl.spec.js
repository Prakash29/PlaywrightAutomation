//import {test, expect} from '@playwright/test'
const { test, chromium, expect } = require('@playwright/test');

test('WindowHnadle', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const Username = page.locator('#username');
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const documentlink = page.locator("[hreff*='document-request']");

    const [newpage] = await Promise.all(
        [context.waitForEvent('page'), documentlink.click()])


    //new page opened 
    const text = await newpage.locator(".red").textContent();
    const arraytext = text.split('@')
    const domain = arraytext[1].split(" ")[0]
    await page.locator("#username").fill(domain);
    console.log(await page.locator("#username").inputValue());
})



