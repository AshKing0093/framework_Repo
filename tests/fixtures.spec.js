
import {test} from "@playwright/test"
test("fixture",async({browserName,browser})=>{
    console.log(browserName);

    let context= await browser.newContext()
    let page= await context.newPage()
    await page.goto("https://www.amazon.co.in")


})