export default class Loginpage{

constructor(page){
this.usernameTextField = page.locator("input#username")
this.passwordTextField = page.locator("input#password")
this.submitBtn = page.getByRole("button",{name:"Submit"})
}
}
