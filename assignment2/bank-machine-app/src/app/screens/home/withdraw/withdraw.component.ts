import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../../services/transaction.service';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../data/bank';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AppConfigService } from '../../../services/app-config.service';

@Component({
  selector: 'bank-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss']
})
export class WithdrawComponent implements OnInit {
  user: User;
  title = 'Withdraw';
  // fromAccount = new FormControl('');
  // amount = new FormControl('');
  options: FormGroup;

  constructor(private fb: FormBuilder,
              private tx: TransactionService,
              private auth: AuthService,
              private config: AppConfigService) {
    this.config.screenTitle = this.title;
    this.config.pastHome = true;

    this.user = this.auth.getCurrentUser();
    console.log(this.title, 'user: ', this.user);
    this.options = this.fb.group({
      fromAccount: '',
      amount: ''
    });
  }

  ngOnInit() {
  }

  enter() {
    let accountId = +this.options.get('fromAccount').value;
    let amount = +this.options.get('amount').value;
    console.log('accountId: ', accountId, 'amount:', amount);

    this.tx.withdraw(accountId, amount);

    this.config.actionComplete();
  }

  cancel() {
    this.config.goHome();
  }
}
