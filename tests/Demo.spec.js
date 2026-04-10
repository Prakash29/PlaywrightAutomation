import {test,expect} from '@playwright/test';

test('Demo test', async ({ page }) => {
      
    await page.goto('https://www.google.com/');
});


