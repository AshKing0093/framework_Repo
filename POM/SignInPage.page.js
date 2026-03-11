export default class SignIn{

    constructor(page){
        this.emailTF= page.locator('[name="email"]')  
        this.passwordTF = page.locator('[name="password"]')   
        this.loginBtn = page.getByRole("button",{name:"Login"}) 

    }
}