import { Component, OnInit } from '@angular/core';
import { Transaction, User } from '../../../data/bank';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TransactionService } from '../../../services/transaction.service';
import { AuthService } from '../../../services/auth.service';
import { AppConfigService } from '../../../services/app-config.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'bank-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  user: User;
  title = 'Accounts';
  // fromAccount = new FormControl('');
  // amount = new FormControl('');
  options: FormGroup;

  constructor(private fb: FormBuilder,
              private tx: TransactionService,
              private auth: AuthService,
              private config: AppConfigService,
              private snackBar: MatSnackBar) {
    this.config.screenTitle = this.title;
    this.config.pastHome = true;

    this.user = this.auth.getCurrentUser();
    console.log(this.title, 'user: ', this.user);
    // this.options = this.fb.group({
    //   fromAccount: '',
    //   amount: 0
    // });
  }

  ngOnInit() {

    setTimeout(() => {
      if (this.config.txSuccessful) {
        this.config.txSuccessful = false;
        this.openSnackBar('Transaction Successful!', 'OK');
      }
    }, 500);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

  enter() {

    this.config.actionComplete();
  }

  cancel() {
    this.config.goHome();
  }

  getAccountType(user: User, id) {
    let a = user.accounts[id];
    return a ? a.type : '-';
  }

  inOrOutAmountFormat(account: Account, tx: Transaction) {
    return +account.id == tx.from ? `(${tx.amount})` : tx.amount;
  }

  balanceWrapper(balance: number) {
    return balance < 0 ? `(${-1*balance})` : balance;
  }
}
