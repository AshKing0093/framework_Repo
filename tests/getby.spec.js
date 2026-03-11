 
 
 import{test} from "@playwright/test"
 test("getBy method",async ({page}) => {
    await page.goto("https://demo.nopcommerce.com/login")
    await page.getByLabel("Emai",{exact:false}).fill("asingare329@gmail.com")
    // ---------------------PLACEHOLDER-----------------
    await page.getByPlaceholder("Search ",{exact:false}).fill("PC");
   
    //------------------------AltText-------------------
    await page.getByAltText("nopCommerce demo store",{exact:true}).click()

    // -------------------------TEXT---------------------
    await page.getByText("Electronics").first().click();
}) 
test("getByRole",async ({page}) => {
   console.log("It is getByRole method")
    await page.goto("https://demo.nopcommerce.com/electronics")
    await page.getByRole("link",{name:' Camera & photo '}).first().click()

})   
test("getByTitle",async ({page}) => {
    await page.goto("https://demo.nopcommerce.com/electronics")
    await page.getByTitle( "Show products in category Camera & photo").first().click()

}) 
test.only("getByTestId",async({page})=>{
await page.goto("https://www.saucedemo.com/")
await page.getByTestId("password").fill("secret_sauce")


})
