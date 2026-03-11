
import{test} from "@playwright/test"
test("Hard coded wait",async({page})=>{

await page.goto("https://practicetestautomation.com/practice-test-login/")
await page.waitForTimeout(2000)

await page.getByText("Username",{exact:true}).fill("student")
await page.waitForTimeout(2000)

await page.locator("#password").fill("Password123")
await page.waitForTimeout(2000)

await page.locator("#submit").click()
await page.waitForTimeout(4000)

})
test.only("autosuggestion",async({page})=>{

    await page.goto("https://www.amazon.in/ref=nav_logo")

    await page.locator("input#twotabsearchtextbox").fill("shoes")
    await page.waitForTimeout(2000)
    
    let a = await page.locator('[role="row"]').allTextContents()
    await page.waitForTimeout(500
        
    )
    console.log(a);
})