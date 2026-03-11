export default class CreateTicket{
constructor(page){
this.subjectTF= page.locator('input#subject')
this.TaskTypeDD= page.locator('//select[@name="tasktype"]')
this.priorityDD= page.locator('//select[@name="priority"]')
this.descriptionTxtArea= page.locator('//textarea[@name="description"]')

this.sendBtn = page.locator('//input[@type="submit"]')

}

}