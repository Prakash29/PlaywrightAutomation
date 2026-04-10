import {test ,expect}from '@playwright/test';

//const {test,expect}=require('@playwright/test');

test('client app login', async ({ page }) => {
    const productName = 'ZARA COAT 3';
    const email = "anshika@gmail.com";
    const products = page.locator(".card-body");
    await page.goto('https://rahulshettyacademy.com/client/');
    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").fill("Iamking@000");

    await page.locator("[value='Login']").click();
    
    await page.waitForLoadState('networkidle');

    await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();
    
    console.log(titles);
   
    await page.locator(".card-body").filter({hasText:"ZARA COAT 3"})
    .getByRole("button",{name:"Add to Cart"}).click();


    await page.getByRole("listitem").getByRole('button',{name:"Cart"}).click();

    await page.pause();

    await page.locator("div Li").first().waitFor();
    await expect(page.getByText("ZARA COAT 3")).toBeVisible();

    await page.getByRole("button",{name:"checkout"}).click();

    await page.getByPlaceholder("Select Country").pressSequentially("ind");

    await page.getByRole("button",{name:"India"}).nth(1).click();

    await page.getByText("PLACE ORDER").click();

  await page.getByRole('heading', { name: 'Thankyou for the order.' }).toBeVisible();


  await page.reload();


})
