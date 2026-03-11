import{test} from "@playwright/test"
import path from "node:path"
import fs from "fs"
import { log } from "node:console"
test.only("Downloading File without using Promise.all()",async ({page}) => {

    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
    await page.getByRole("textbox",{name:"Enter text here"}).fill("Name - Ashwini Kumar, Place of birth - Hoshangabad, Time - 5:42 pm and Year - 1993")
    await page.getByPlaceholder("Filename").fill("MyBioData1.txt")
    
    // let [downloadfile]= await Promise.all([
    // page.waitForEvent("download"), 
    // page.getByRole("button",{name:"Download"}).click()
    // ])

    //Agenda - waitForEvent() should start waiting, after that the action which is triggering the event should be returned
    let download = page.waitForEvent("download")
    await page.getByRole("button",{name:"Download"}).click()
    let downloadfile= await download
    await page.getByRole("button",{name:"Download"}).click()
    
    let downloadfolder= "C:/Users/HP/OneDrive/Desktop/downloadssssss"
    let filename = downloadfile.suggestedFilename()
    let fullpath =  path.join(downloadfolder,filename)
    
    //saving the downloaded file in the folder created on the desktop
    await downloadfile.saveAs(path.join(downloadfolder,filename))
    await page.waitForTimeout(3000)

    // verifying whether the file has been downloaded in the specified path or not
    if(fs.existsSync(fullpath)){
      console.log(`The file has been successfully saved at : ${fullpath}`);
    }else{console.log("No such file exists")}

})