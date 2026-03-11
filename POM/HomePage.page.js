export default class HomePage {

    constructor(page) {
        this.createTicketLink = page.getByRole("link", { name: " Create Ticket" })
        this.viewTicketLink = page.getByRole("link", { name: " View Ticket" })
    }
}