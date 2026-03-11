import { test } from "@playwright/test"
import landing from "../POM/Landingpage.page.js"
import SignUp from "../POM/signupSmall.page.js"
import SignIn from "../POM/SignInPage.page.js"
import HomePage from "../POM/HomePage.page.js"
import CreateTicket from "../POM/CreateTicketPage.js"
import testdata from "../testData/e2e1.json"



test(" SmallCRM project ", async ({ page }) => {
let url          =     testdata.url
let name         =     testdata.name
let email        =     testdata.email+Math.floor(Math.random() * 1000)+"@gmail.com"
let pwd          =     testdata.pwd 
let rpwd         =     testdata.rpwd
let contact      =     testdata.contact
let subject      =     testdata.subject
let description  =     testdata.description


    page.on("dialog", async (dialog) => {
        console.log(await dialog.message())
        await dialog.accept()

    })

    let LanPage = new landing(page)
    let sup = new SignUp(page)
    let sip = new SignIn(page)
    let hp = new HomePage(page)
    let CTPage = new CreateTicket(page)


    //launch the URL
    await page.goto(url);

    await LanPage.SignUpLink.click()
    //------------------SIGN UP page---------------------
    //Name textfield
    await sup.nameTxt.fill(name)
    //Email id textfield
    await sup.emailTxt.fill(email)
    //Password textfield
    await sup.pwdTxt.fill(pwd)
    //Re-Password textfield
    await sup.rpwdTxt.fill(rpwd)
    //Contact no.textfield
    await sup.contactTxt.fill(contact)
    //Gender Radiobutton
    await sup.MaleRadBtn.click()
    // submit button
    await sup.submitBtn.click()

    //alert  - get the message

    // --------------- SIGN IN page----------------
    //email id textfield
    await sip.emailTF.fill(email)
    // Password textfield
    await sip.passwordTF.fill(pwd)
    //click on login
    await sip.loginBtn.click()

    //---------------------HOME PAGE-----------------------------
    //Create a ticket - click
    await hp.createTicketLink.click()
    //---------------------CREATE TICKET PAGE---------------------------
    //add subject(textfield)
    await CTPage.subjectTF.fill(subject)

    //add Task type - dropdown - "Option1"
    await CTPage.TaskTypeDD.selectOption({ value: "ot1" })

    //Priority dropdown - "Important"
    await CTPage.priorityDD.selectOption({ value: "important" })

    //Description(textfield)
    await CTPage.descriptionTxtArea.fill(description)
    //Send button click
    await CTPage.sendBtn.click()

    //verify the notification alert - Get the message

    // click on view ticket and take screenshot of the page
    await hp.viewTicketLink.click()

    //verify the page and take screenshot
    await page.screenshot({ path: './screenshot/ticketss.png' })
    await page.waitForTimeout(2000)

})