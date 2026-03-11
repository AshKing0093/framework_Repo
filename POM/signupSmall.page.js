export default class SignUp {

    constructor(page) {
        this.nameTxt = page.locator("input#name")
        this.emailTxt = page.locator("input#email")
        this.pwdTxt = page.locator("input#password")
        this.rpwdTxt = page.locator("input#cpassword")
        this.contactTxt = page.locator("input#txtpassword")
        this.MaleRadBtn = page.locator('//input[@type="radio" and @value="m"]')
        this.FemaleRadBtn = page.locator('//input[@type="radio" and @value="f"]')
        this.submitBtn = page.locator('//input[@class="btn btn-primary btn-cons pull-right"]')
    }

}