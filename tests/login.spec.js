import {test} from "@playwright/test"
import loginpage from "../PageObjectModel/loginpage.page.js"
import logindata from "../testData/logindata.json"

test(" ",async({page})=>{
let Lp = new loginpage(page)
let url = logindata.url
let usn = logindata.usn
let pwd = logindata.pwd

//launch url
await page.goto(url)
//pass username
await Lp.usernameTextField.fill(usn)
//pass password
await Lp.passwordTextField.fill(pwd)
//click on submit button
await Lp.submitBtn.click()

await page.waitForTimeout(3000)
})