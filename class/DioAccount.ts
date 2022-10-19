export abstract class DioAccount {
    private readonly name: string
    private readonly accountNumber: number
    private balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    getName = (): string => {
        return this.name
    }

    getBalance = (): number => {
        return this.balance
    }

    setBalance = (newBalance: number): void =>{
        this.balance = newBalance
    }

    validate = (): boolean => {
        if(this.status){
            return this.status
    }

        throw new Error("Conta Inválida!")
    }

    deposit = (newBalance: number): void => {
        if(this.validate()){
            this.balance += newBalance
            console.log(`Você efetuou um depósito de R$ ${newBalance}, ficando com R$ ${this.balance} de saldo disponivel em sua conta!`)
        } else {
            console.log("Não é possivel depositar com uma conta inválida!")
        }
    }

    withdraw = (cash: number): void => {
        if(this.validate() &&  this.balance >= cash){
            this.balance -= cash
            console.log(`Você sacou da sua conta R$ ${cash}, ficando com R$ ${this.balance} de saldo disponivel em sua conta!`)
        } else {
            if(this.validate() != true){
                console.log("Não é possivel fazer saques com uma conta inválida!")
            } else {
                console.log(`O valor escolhido para sacar, não está disponivel no saldo da conta!`)
            }
        }
    }

   
}
