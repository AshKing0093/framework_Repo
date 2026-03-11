
import{test} from "@playwright/test"
test("explicit wait",async({page})=>{

await page.goto("https://www.amazon.in/ref=nav_logo")
await page.locator('input#twotabsearchtextbox').fill("iPhone")
await page.waitForTimeout(2000)
//the below line of code would actually wait until a certain text is present or found
//Syntax = await page.locator('text="Expected Text"').waitFor();
await page.locator('[class="s-suggestion s-suggestion-ellipsis-direction"]',
    {hasText:"iphone 16 pro 256gb"}).waitFor()
    
let phoneList = await page.locator('[class="s-suggestion s-suggestion-ellipsis-direction"]').allTextContents();
console.log(phoneList)

});
