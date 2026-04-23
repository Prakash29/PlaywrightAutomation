
const {test,expect}=require ('@playwright/test');

test('Valid User Login & Payment Flow',async({page})=>{

    await page.goto('https://www.saucedemo.com/v1/');
    
})