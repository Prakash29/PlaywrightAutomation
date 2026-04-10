import{test,chromium}from '@playwright/test'

test('Multibrowser',async()=>{

const browser = await chromium. launch();
// Create two independent browser contexts
const context1 = await browser.newContext();
const context2 = await browser.newContext();
const page1 = await context1.newPage();
const page2 = await context2.newPage();
// Each context has independent cookies/storage
await page1.goto('https://example.com');
await page2.goto('https://example.com');
//
await context1.close();

})