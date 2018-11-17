import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'bank-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  accountNumber = new FormControl('');
  pin = new FormControl('');

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  }

  login() {
    console.log('accountNumber = ' + this.accountNumber.value, 'pin = ' + this.pin.value);
    this.router.navigate(['/home']);
  }
}
