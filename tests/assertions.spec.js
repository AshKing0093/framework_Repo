import {test,expect} from '@playwright/test'

test('Auto-retry assertions- QSpiders UI',async({page})=>{

  await page.goto('https://demoapps.qspiders.com/ui?scenario=1');

    const textField = page.locator('input[id="name"]');
    await textField.fill('Ashwini');
    await expect(textField).toHaveValue('Ashwini');

    const b = page.locator('//span[@class="bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-full text-center relative py-1 font-bold text-[20px] w-[50%]"]');
    await expect(b).toContainText('Write a script to enter data into Text field?');

    
    



});