//import {test, expect} from '@playwright/test'
const { test, expect } = require('@playwright/test');

test('FirstPLTest', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    console.log(await page.title());
    await expect (page).toHaveTitle('Practice Page');
    await page.reload();
    await page.pause();
    
    await browser.newContext();
    await context.newPage();
   await page.goto('https://www.google.com/');
});

 test('sampledemo2',async ({page})=>
{
    await page.goto('https://www.youtube.com/watch?v=fEjWXFBCOoo');
})

