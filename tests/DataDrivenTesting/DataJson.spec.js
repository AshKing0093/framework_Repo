
import{test} from "@playwright/test"
import  fs from "fs"
let datafile = fs.readFileSync("C:/Users/HP/OneDrive/Desktop/playwright/testData/singlesetdata.json")
//Converting JSON object to JavaScipt object
let data = JSON.parse(datafile)
test("Get data from JSON", async ({page})=>{
// for(let Alldata of data){
//     console.log(Alldata)}
// data.forEach(d=> {
// console.log(d.greet)
// });




})