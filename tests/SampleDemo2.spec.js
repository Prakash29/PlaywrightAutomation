//import {test, expect} from '@playwright/test'
const {test, chromium, expect} = require('@playwright/test');

test('FirstPLTest',async ({browser})=>
{
const context = await browser.newContext();

const page = await context.newPage();
const FirstName=page.locator('input#name');
await page.goto('https://testautomationpractice.blogspot.com/');
console.log(await page.title());
await expect(page).toHaveTitle("Automation Testing Practice")
console.log('First test');
await FirstName.fill('Prakash');
await page.locator('#email').fill('abc@gmail.com');
});

test('SeconfPLTest',async ({page})=>
{
await page.goto('https://demoqa.com/login');
console.log(await page.title());
await expect(page).toHaveTitle("DEMOQA")
console.log('second test');


});



test('login',async({page})=>{

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    const email="anshika@gmail.com";
    const pwd="Iamking@000";

    await page.locator("#userEmail").fill(email);
    await page.locator("userPassword").fill(pwd);
    await page.locator("[value='Login']").click();

    await page.waitForLoadState('networkkidle');

    await page.locator(".card-body b").first().waitFor();

    const titles= await page.locator(".card-body b").allTextContents();

    console.log(titles);

})

test('Uichecks',async({page})=>
{
 await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

 const Username = page.locator('#username');

 const password= page.locator('#signInBtn');

 const dropdown=page.locator("select.form-control");

 await dropdown.selectOption("consult");
 //await page.pause();
 await page.locator(".radiotextsty").last().click();

 await page.locator("#okayBtn").click();
 console.log(await page.locator(".radiotextsty").last().isChecked());

 await expect (page.locator(".radiotextsty").last()).toBeChecked();


 await page.locator("#terms").click();
 await expect(page.locator("#terms")).toBeChecked();

 await page.locator("#terms").uncheck();
 expect (await page.locator("#terms").isChecked()).toBeFalsy();
  await page.pause();



})

    
