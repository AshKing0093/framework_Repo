
import{test}from "@playwright/test"
test("wait for event",async({page})=>{

await page.goto("https://demoapps.qspiders.com/ui/download")
await page.fill("#writeArea","I am downloading the file")
let[downloadfile] = await Promise.all([
    
    
    page.waitForEvent('download'),
    page.click('#downloadButton')])
console.log(await downloadfile.path());

})