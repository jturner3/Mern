class BankAccount {
    constructor(intRate=0.01, balance=0) {
        this.intRate=intRate;
        this.balance=balance;
    }

    deposit(amount) {
        this.balance += amount;
        return this;
    }

    withdrawl(amount) {
        this.balance -= amount;
        return this;
    }

    displayAccontInfo() {
        console.log("Current balance: $" + this.balance);
        console.log("Current interest rate: " + this.intRate*100 + "%");
        return this;
    }

    yieldInterest() {
        console.log("Interest: $" + this.balance*this.intRate);
        return this.balance * this.intRate;
    }
}

const checking = new BankAccount(0.05, 100);
const saving = new BankAccount(0.1, 1000);

checking.deposit(100).deposit(200).deposit(300).withdrawl(200).displayAccontInfo().yieldInterest();
saving.deposit(50).deposit(500).withdrawl(100).withdrawl(50).withdrawl(150).withdrawl(200).displayAccontInfo().yieldInterest();