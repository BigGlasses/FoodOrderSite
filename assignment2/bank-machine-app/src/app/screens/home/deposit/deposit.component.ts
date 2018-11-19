import { Component, OnInit } from '@angular/core';
import { User } from '../../../data/bank';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TransactionService } from '../../../services/transaction.service';
import { AuthService } from '../../../services/auth.service';
import { AppConfigService } from '../../../services/app-config.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'bank-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})
export class DepositComponent implements OnInit {
  user: User;
  title = 'Deposit';
  // fromAccount = new FormControl('');
  // amount = new FormControl('');
  options: FormGroup;

  constructor(private fb: FormBuilder,
              private tx: TransactionService,
              private auth: AuthService,
              private config: AppConfigService,
              private spinner: NgxSpinnerService) {
    this.config.screenTitle = this.title;
    this.config.pastHome = true;

    this.user = this.auth.getCurrentUser();
    console.log(this.title, 'user: ', this.user);
    this.options = this.fb.group({
      toAccount: '',
      amount: ''
    });
  }

  ngOnInit() {
  }

  enter() {
    let accountId = +this.options.get('toAccount').value;
    let amount = +this.options.get('amount').value;
    console.log('accountId: ', accountId, 'amount:', amount);

    this.spinner.show();
    this.tx.deposit(accountId, amount);


    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
      this.config.actionComplete();
    }, 2000);

  }

  cancel() {
    this.config.goHome();
  }
}
