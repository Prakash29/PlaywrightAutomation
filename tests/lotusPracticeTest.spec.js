import {test ,expect}from '@playwright/test';

test('demoQatitile',async({page})=>{

    await page.goto('https://demoqa.com/');
    
    await expect (page).toHaveTitle('demosite');


});

test ('formsFilling',async({page})=>{

 await page.goto('https://demoqa.com/');
    

await page.click('text=Forms');

(await page.waitForSelector('text=Practice Form')).click();


await page.getByPlaceholder('First Name').fill('Prakash')

await page.getByPlaceholder('Last Name').fill('Sonawane');

await page.getByPlaceholder('name@example.com').fill('abc1111@gmail.com');


await page.locator("[value='Male']").check();

await page.getByPlaceholder('Mobile Number').fill('9098989890');



await page.click('button[type="submit"]');

//await expect (page.locator('#firstName')).toHaveAttribute()

const modal = page.locator('.modal-content');
await expect(modal).toBeVisible();
await expect(modal).toContainText("Prakash Sonawane");
await expect(modal).toContainText("Male");




})