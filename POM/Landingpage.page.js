
 
export default class landing{

constructor(page){
this.SignUpLink   = page.locator('//a[@class="btn btn-primary btn-xl rounded-pill mt-5"]')
this.UserLoginBtn = page.getByRole("button", {name:"User Log In"})
this.AdminBtn     = page.getByRole("button", {name:"Admin"})
}
}
