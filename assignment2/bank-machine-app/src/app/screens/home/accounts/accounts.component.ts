import { Component, OnInit } from '@angular/core';
import { User } from '../../../data/bank';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TransactionService } from '../../../services/transaction.service';
import { AuthService } from '../../../services/auth.service';
import { AppConfigService } from '../../../services/app-config.service';

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
              private config: AppConfigService) {
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
  }

  enter() {

    this.config.actionComplete();
  }

  cancel() {
    this.config.goHome();
  }
}
