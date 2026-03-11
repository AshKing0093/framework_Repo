import{test} from "@playwright/test"
test("elements control",async({page})=>{

// await page.goto("https://demoapps.qspiders.com/ui?scenario=1")

// await page.locator("#name").fill("Ashwini")
// let text = await page.locator("#name").inputValue();//this method returns those values which are not present in the dom structure
// console.log(text);

// await page.locator("#email").fill("asingare329@gmail.com")
// let email = await page.locator("#email").inputValue()
// console.log(email)

// await page.locator("#password").fill("ashwinikumar1693")
// let password = await page.locator("#password").inputValue();
// console.log(password);

// await page.locator('//button[@type="submit"]').click()

// // let text = await page.locator('//section[@class="poppins text-[14px]" and text()="Radio Button"]').textContent()
// // console.log(text);

// // await page.pause(3000)
// //allTextContents
// let Mtext = await page.locator('//section[@class="poppins text-[14px]"]').allTextContents();
// console.log(Mtext);

// //getAttribute()
// let AV= await page.locator('//section[text()="Link"]').getAttribute("class")
// console.log(AV);

//element.all()
await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
//let group= await page.locator('//section[@class="poppins text-[14px]"]').all()
//In the above line, compiler is not able to recognize multiple elements reason being the time taken by the elements to load is different
//to deal with this kind of situation we first identify a single element and use wait statement with after it in the next line identify the elements again and use all() method
await page.locator('//section[@class="poppins text-[14px]"]').first().waitFor()
let group= await page.locator('//section[@class="poppins text-[14px]"]').all()
console.log(group);

})