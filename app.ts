import { PeopleAccount } from "./class/PeopleAccount"
import { CompanyAccount } from "./class/CompanyAccount"
import { AdminAccount } from "./class/AdminAccount"

const people = new PeopleAccount(58, "Gustavo", 5885)
console.log(people)

people.deposit(255)
people.withdraw(35)

console.log("\n--\n")

const company = new CompanyAccount("Gustavo Ltda.", 1245)
console.log(company)


company.deposit(145)
company.withdraw(25)
company.getLoan(1020)

console.log("\n--\n")

const admin = new AdminAccount("Admin", 4897)
console.log(admin)

admin.deposit(102)
admin.withdraw(12)