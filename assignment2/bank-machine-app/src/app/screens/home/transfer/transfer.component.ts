import { Component, OnInit } from '@angular/core';
import { User } from '../../../data/bank';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TransactionService } from '../../../services/transaction.service';
import { AppConfigService } from '../../../services/app-config.service';
import { AuthService } from '../../../services/auth.service';

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
              private config: AppConfigService) {
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

    this.tx.transfer(fromId, toId, amount);

    this.config.actionComplete();
  }

  cancel() {
    this.config.goHome();
  }
}
