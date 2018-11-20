import { Injectable } from '@angular/core';
import { User } from '../data/bank';
import { DataService } from './data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User;
  key = 'currentUser';

  constructor(private data: DataService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  public login(accountId, pin): User {
    let user = this.data.getUser(accountId);
    if (!user) {
      user = this.data.createUser(accountId, pin);
      user.init();
    }

    if (user.pin === pin) {
      this.currentUser = user;
      this.data.putInStorage(this.key, user);
      return user;
    }

    return null;
  }

  isLoggedIn() {
    return !!this.currentUser;
  }

  public logout() {
    this.currentUser = null;
    this.data.putInStorage(this.key, null);
    this.router.navigateByUrl('/login');
  }

  getCurrentUser(): User {

    if (!this.currentUser || !('totalBalance' in this.currentUser)) {
      const userObj = this.data.getFromStorage(this.key) as User;
      if (!userObj) {
        this.logout();
      }
      this.currentUser = new User();
      Object.assign(this.currentUser, userObj);
    }

    return this.currentUser;
  }
}
