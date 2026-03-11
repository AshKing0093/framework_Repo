
import{test} from "@playwright/test"
import path from "node:path"
test("Upload File",async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')
await page.locator('#singleFileInput').setInputFiles("C:/Users/HP/OneDrive/Desktop/playwright/UploadFiles/resume.txt")
await page.getByRole("button",{name:'Upload Single File'}).click()



await page.locator("#multipleFilesInput").setInputFiles([
"C:/Users/HP/OneDrive/Desktop/playwright/UploadFiles/biodata.txt",
"C:/Users/HP/OneDrive/Desktop/playwright/UploadFiles/progressReport.xlsx",
"C:/Users/HP/OneDrive/Desktop/playwright/UploadFiles/resume.txt"]) 

await page.getByRole("button",{name:"Upload Multiple Files"}).click()

await page.waitForTimeout(4000)

})

test.only("Downloading File",async ({page}) => {

    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
    await page.getByRole("textbox",{name:"Enter text here"}).fill("now again downloading")
    await page.getByPlaceholder("Filename").fill("NewFile.txt")
    
    let [downloadfile]= await Promise.all([
    page.waitForEvent("download"), 
    page.getByRole("button",{name:"Download"}).click()
    ])
    
    let downloadfolder= "C:/Users/HP/OneDrive/Desktop/downloadssssss"
    let filename = downloadfile.suggestedFilename()
    //await downloadfile.saveAs(path.join(downloadfolder,filename))
    // instead of the above step we can also pass the directory path
       
    /* giving path with the help of directory name - 
    await downloadfile.saveAs(path.join(__dirname,"../../downloadedFile",filename)) */
   
    //saving the downloaded file in the folder created on the desktop
    await downloadfile.saveAs(path.join(downloadfolder,filename))
    await page.waitForTimeout(3000)

})
