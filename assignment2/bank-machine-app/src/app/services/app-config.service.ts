import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  title = 'Bank Machine App';
  pastHome = false;
  user: object;
  screenTitle: string;
  txSuccessful = false;
  lastTx: Date;

  constructor(private router: Router) { }

  goHome() {
    this.pastHome = false;
    this.router.navigateByUrl('/home');
  }

  actionComplete() {
    this.txSuccessful = true;
    this.router.navigateByUrl('/home/accounts');
  }
}
