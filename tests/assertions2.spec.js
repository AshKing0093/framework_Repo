import {test,expect} from '@playwright/test';

test('Verify Login Page Title, URL and other things', async ({page}) => {
   await page.goto('https://practicetestautomation.com/practice-test-login/');
//   await expect(page).toHaveTitle('Test Login | Practice Test Automation');
  
//   await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/');

  let a = page.locator('//input')
  await expect(a).toHaveCount(2)


});