import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Account, Transaction, User } from '../data/bank';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  lastTx = new Date();
  constructor(private auth: AuthService,
              private data: DataService) {}

  public transfer(from: number, to: number, amount: number) {
    const user = this.auth.getCurrentUser();
    const tx = user.transfer(from, to, amount);
    this.lastTx = tx.date;
    this.data.saveUser(user);
  }

  public deposit(to: number, amount: number) {
    const user = this.auth.getCurrentUser();
    const tx = user.deposit(to, amount);
    this.lastTx = tx.date;
    this.data.saveUser(user);
  }

  public withdraw(from, amount) {
    const user: User = this.auth.getCurrentUser();
    const tx = user.withdraw(+from, +amount);
    this.lastTx = tx.date;
    this.data.saveUser(user);
  }
}
