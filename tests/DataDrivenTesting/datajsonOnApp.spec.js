
import{test} from "@playwright/test"
import  fs from "fs"
let datafile = fs.readFileSync("C:/Users/HP/OneDrive/Desktop/playwright/testData/singlesetdata.json")
//Converting JSON object to JavaScipt object
let data = JSON.parse(datafile)
test("Get data from JSON", async ({page})=>{

    await page.goto(data.url)
    await page.locator("#username").fill(data.Username)


})