import { DioAccount } from "./DioAccount"


export class AdminAccount extends DioAccount {

    deposit = (newBalance: number): void => {
        if(this.validate()){
           let balance = this.getBalance()
           let balanceP = balance + newBalance + 10
            this.setBalance(balanceP)
            console.log(`Você efetuou um depósito de R$ ${newBalance}, e mais R$ 10 foram acrescidos!`) 
        } else {
            console.log("Não é possivel depositar com uma conta inválida!")
        }
    }
}