
import{test} from "@playwright/test"
//We can use global timeout statement too
   // test.use({actionTimeout:5000})
    test.only(" fill -1 ", async ({page})=> {
      //  page.setDefaultTimeout(3000)
        await page.goto("https://practicetestautomation.com/practice-test-login/")
        await page.locator('//input[@id="username"]').fill("student")
        //we can provide timeout for particular method as well
        await page.locator('//button[@class="btn"]').click({timeout:1000})
        
})
 

test(" fill - 2", async ({page})=> {
   
     await page.goto("https://practicetestautomation.com/practice-test-login/")
     await page.locator('//input[@id="uername"]').fill("student")
    
})