const { test, expect } = require('@playwright/test');

test('DemoQA Practice Form Automation', async ({ page }) => {
    // Navigate directly to the practice form
    await page.goto('https://demoqa.com/automation-practice-form');

    // Fill in the form fields
    await page.getByPlaceholder('First Name').fill('John');
    await page.getByPlaceholder('Last Name').fill('Doe');
    await page.getByPlaceholder('name@example.com').fill('john.doe@example.com');

    // Select gender
    await page.locator("[value='Male']").check();

    // Fill mobile number
    await page.getByPlaceholder('Mobile Number').fill('1234567890');

    // Fill date of birth
    await page.locator('#dateOfBirthInput').click();
    await page.locator('.react-datepicker__month-select').selectOption('January');
    await page.locator('.react-datepicker__year-select').selectOption('1990');
    await page.locator('.react-datepicker__day--001:not(.react-datepicker__day--outside-month)').click();

    // Fill subjects (optional)
    await page.locator('#subjectsInput').fill('Computer Science');
    await page.locator('#subjectsInput').press('Enter');

    // Select hobbies
    await page.locator('#hobbies-checkbox-1').check(); // Sports
    await page.locator('#hobbies-checkbox-2').check(); // Reading

    // Upload picture (optional - would need a file path)
    // await page.locator('#uploadPicture').setInputFiles('path/to/picture.jpg');

    // Fill current address
    await page.locator('#currentAddress').fill('123 Main Street, City, State 12345');

    // Select state and city
    await page.locator('#state').click();
    await page.locator('#react-select-3-option-0').click(); // NCR

    await page.locator('#city').click();
    await page.locator('#react-select-4-option-0').click(); // Delhi

    // Submit the form
    await page.click('button[type="submit"]');

    // Verify the submission modal appears
    const modal = page.locator('.modal-content');
    await expect(modal).toBeVisible();

    // Verify the submitted data in the modal
    await expect(modal).toContainText("John Doe");
    await expect(modal).toContainText("john.doe@example.com");
    await expect(modal).toContainText("Male");
    await expect(modal).toContainText("1234567890");
    await expect(modal).toContainText("01 January,1990");
    await expect(modal).toContainText("Computer Science");
    await expect(modal).toContainText("Sports, Reading");
    await expect(modal).toContainText("123 Main Street, City, State 12345");
    await expect(modal).toContainText("NCR Delhi");

    console.log('Form submitted successfully!');
});