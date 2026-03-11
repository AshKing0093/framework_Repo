

import{test} from "@playwright/test"
test("explicit wait",async({page})=>{

await page.goto("https://www.amazon.in/ref=nav_logo")
await page.locator('input#twotabsearchtextbox').waitFor({timeout:3000}) //this statement 

await page.locator('[class="s-suggestion s-suggestion-ellipsis-direction"]',
    {hasText:"iphone 16 pro 256gb"}).waitFor()
    
let phoneList = await page.locator('[class="s-suggestion s-suggestion-ellipsis-direction"]').allTextContents();
console.log(phoneList)

})