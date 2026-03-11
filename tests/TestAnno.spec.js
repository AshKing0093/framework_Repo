 import{test} from "@playwright/test"
 test.describe("login",async()=>{

              test("Valid credentials",async({browserName,page})=>{
              
                await page.goto("https://www.amazon.in")
       })
              test ("Invalid credentials",async()=>{

              console.log("Test - 3");
       })

 })
 
