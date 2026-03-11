import{test}from "@playwright/test"
test("notifications handling",async ({browser})=>{
    let context = await browser.newContext({permissions:["notifications","microphone","geolocation","camera"]})
    let page= await context.newPage()
    
    await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0")
    await page.getByRole("button",{name:'Notification'}).click()
    
    //Validation of permission status---------------------
    let res= await page.evaluate(()=>{return Notification.requestPermission()});
     console.log(`permission: ${res}`);
     
    //Revoking all the permissions------------------------
     await context.clearPermissions()

     let res1= await page.evaluate(()=>{return Notification.requestPermission()});
     console.log(`permission: ${res1}`);
     
     
})