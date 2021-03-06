import { Component, OnInit } from '@angular/core';
import { User } from '../../../data/bank';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TransactionService } from '../../../services/transaction.service';
import { AppConfigService } from '../../../services/app-config.service';
import { AuthService } from '../../../services/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'bank-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {
  user: User;
  title = 'Transfer';
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
      fromAccount: '',
      toAccount: '',
      amount: ''
    });
  }

  ngOnInit() {
  }

  enter() {
    const fromId = +this.options.get('fromAccount').value;
    const toId = +this.options.get('toAccount').value;
    const amount = +this.options.get('amount').value;
    console.log('from: ', fromId, 'amount:', amount);

    this.spinner.show();
    this.tx.transfer(fromId, toId, amount);


    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
      this.config.actionComplete();
    }, 2000);
  }

  cancel() {
    this.config.goHome();
  }

  valid() {
    const to = this.options.get('toAccount').value;
    const from = this.options.get('fromAccount').value;
    return to !== '' &&
      from !== '' &&
      to !== from &&
      this.options.get('amount').value !== '';
  }
}
