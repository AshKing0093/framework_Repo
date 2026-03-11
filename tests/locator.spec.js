
import{test} from "@playwright/test"
test("locators", async({page})=>{

await page.goto("https://practicetestautomation.com/practice-test-login/")
// Identify the Name textfield
await page.locator('//input[@id="username"]').fill("student")
//identify the Password textfield
await page.locator('//input[@name="password"]').fill("Password123")
//Identify the login button
await page.locator('//button[@class="btn"]').click()

})