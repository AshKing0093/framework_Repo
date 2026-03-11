
import{test,expect} from "@playwright/test"
test("Dialog Handling", async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')
// await page.getByRole("button",{name:'Simple Alert'}).click()
// await page.getByRole("button",{name:"Confirmation Alert" }).click()
// await expect(page.locator('#demo')).toContainText("Cancel")

// await page.waitForTimeout(2000)
// await page.getByRole("button",{name:'Prompt Alert'}).click()
// await expect(page.locator("#demo")).toContainText("cancelled")

await page.on("dialog",async(dialog)=>{



    
}


})