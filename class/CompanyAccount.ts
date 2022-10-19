import { DioAccount } from "./DioAccount"


export class CompanyAccount extends DioAccount {
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    getLoan = (newLoan: number): void => {
        let balance = this.getBalance()
        if(this.validate()){
            console.log(balance)
            console.log(`A empresa fez um empréstimo de R$ ${newLoan}, ficando com R$ ${newLoan+balance} disponivel em sua conta!`)
            this.setBalance(newLoan+balance)
        }  else {
            console.log("Não é possivel realizar emprestimos com uma conta inválida!")
        }    
    }

    withdraw = (cash: number): void => {
        let balance = this.getBalance()
        if(this.validate() &&  balance >= cash){
            balance -= cash
            this.setBalance(balance)
            console.log(`A empresa sacou da sua conta R$ ${cash}, ficando com R$ ${balance} de saldo disponivel em sua conta!`)
        } else {
            if(this.validate() != true){
                console.log("Não é possivel fazer saques com uma conta inválida!")
            } else {
                console.log(`O valor escolhido para sacar, não está disponivel no saldo da conta!`)
            }
        }
    }

    deposit = (newBalance: number): void => {
        let balance = this.getBalance()
        if(this.validate()){
            balance += newBalance
            this.setBalance(balance)
            console.log(`A empresa efetuou um depósito de R$ ${newBalance}, ficando com R$ ${balance} de saldo disponivel em sua conta!`)
        } else {
            console.log("Não é possivel depositar com uma conta inválida!")
        }
    }
}