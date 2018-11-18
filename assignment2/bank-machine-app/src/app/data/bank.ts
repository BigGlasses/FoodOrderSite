export class Transaction {
  // from: string;
  // to: string;
  // ammount: number;
  // data = new Date();

  constructor(public from?: number,
              public to?: number,
              public amount: number = 0,
              public date = new Date()) {
  }
}

export const SAVINGS = 'SAVINGS',
  CHECKING = 'CHECKING';

export class Account {

  transactions: Transaction[];

  constructor(public id: number,
              public userId: number,
              public type: string,
              public balance: number) {
  }

  applyTransaction(trans: Transaction) {
    if (trans.to === this.id) {
      this.balance += trans.amount;
    } else if (trans.from === this.id) {
      this.balance -= trans.amount;
    }
  }
}

export class User {
  accounts: Account[] = [];

  constructor(public id?,
              public name?,
              public pin?,
              init = false) {
    console.log('New users: ', JSON.stringify(this));
    if (init) {
      this.init();
    }
  }

  public transfer(from: number, to: number, amount: number) {
    const trans = new Transaction(from, to, amount);
    console.log('Transfer: ', JSON.stringify(trans));
    this.applyTransaction(this.accounts[from], trans);
    this.applyTransaction(this.accounts[to], trans);
    // this.accounts[from].applyTransaction(trans);
    // this.accounts[to].applyTransaction(trans);
    console.log('Status: ', JSON.stringify(this.accounts));
  }

  public deposit(to: number, amount: number) {
    const trans = new Transaction(null, to, amount);
    console.log('Deposit: ', JSON.stringify(trans));
    this.applyTransaction(this.accounts[to], trans);
    // this.accounts[to].applyTransaction(trans);
    console.log('Status: ', JSON.stringify(this.accounts));
  }

  public withdraw(from: number, amount: number) {
    const trans = new Transaction(from, null, amount);
    console.log('Withdraw: ', JSON.stringify(trans));
    this.applyTransaction(this.accounts[from], trans);
    console.log('Status: ', JSON.stringify(this.accounts));
  }

  public createAccount(type: string, balance: number) {
    this.accounts.push(
      new Account(this.accounts.length, this.id, type, balance)
    );
  }

  applyTransaction(account: Account, trans: Transaction) {
    if (trans.to === account.id) {
      account.balance += trans.amount;
    } else if (trans.from === account.id) {
      account.balance -= trans.amount;
    }
  }

  public totalBalance() {
    let sum = 0;
    this.accounts.forEach(account => sum += account.balance);
    return sum;
  }
  private init() {
    this.createAccount(CHECKING, 1000);
    this.createAccount(SAVINGS, 10000);
  }
}
