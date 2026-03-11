 
import {chromium, test} from "@playwright/test"
test("browser controls",async ({browser})=>{
let context = await browser.newContext()
let page = await context.newPage()
console.log(await context.cookies())

await page.goto("https://www.google.co.in")
await page.setViewportSize({width:1000,height:500});

 })
 test.only("instance",async()=>{
  let browser= await chromium.launch()
  let context = await browser.newContext();
  let page = await context.newPage()
  
  await page.goto("https://google.com")
  await browser.close()
 })

 test("screenshot",async({page})=>{
    await page.goto("https://www.google.in")
    let time = new Date().getTime()
    console.log(time)
    await page.screenshot({path:`screenshot/screenshot-page-${time}.png`})
 })