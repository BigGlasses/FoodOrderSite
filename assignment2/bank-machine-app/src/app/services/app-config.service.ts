import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  title = 'Bank Machine App';
  pastHome = false;
  user: object;
  screenTitle: string;

  constructor(private router: Router) { }

  goHome() {
    this.pastHome = false;
    this.router.navigateByUrl('/home');
  }

  actionComplete() {
    this.router.navigateByUrl('/home/complete');
  }
}
