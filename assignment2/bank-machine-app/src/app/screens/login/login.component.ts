import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../data/bank';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'bank-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title = 'Login';

  accountNumber = new FormControl('');
  pin = new FormControl('');

  constructor(private auth: AuthService,
              private route: ActivatedRoute,
              private router: Router,
              private spinner: NgxSpinnerService) {
  }

  ngOnInit() {
  }

  login() {
    console.log('accountNumber = ' + this.accountNumber.value, 'pin = ' + this.pin.value);
    const user = this.auth.login(this.accountNumber.value, this.pin.value);

    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
      if (!user) {
        this.pin.setErrors({wrongPin: true});
        console.log('Wrong PIN');
        return;
      }
      this.router.navigate(['/home']);
    }, 2000);


  }
}
