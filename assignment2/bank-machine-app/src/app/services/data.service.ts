import { Injectable } from '@angular/core';
import { Account, Transaction, User } from '../data/bank';
import { el } from '@angular/platform-browser/testing/src/browser_util';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  users = {};
  userCount = 0;

  key = 'bank_app_';
  usersKey = 'users';

  constructor() {
    this.initData();
  }

  public hasUser(id: string) {
    return id in this.users;
  }

  public getUser(id) {
    return this.users[id] || null;
  }

  private initData() {
    let users = this.getFromStorage(this.usersKey);

    if (users && Object.keys(users).length > 0) {
    // if (data && 'users' in data && Object.keys(data.users).length > 0) {
      this.users = users;
    } else {
      this.users[0] = new User(this.userCount++, 'John Doe', '0000', true);
    }
  }

  putInStorage(key, data) {
    localStorage.setItem(this.key + key, JSON.stringify(data));

  }

  getFromStorage(key) {
    return JSON.parse(localStorage.getItem(this.key + key)) || null;
  }


  createUser(id: number, pin: number) {
    this.userCount++;
    this.users[id] = new User(id, 'John Doe', pin, true);
    return this.users[id];
  }

  saveUser(user: User) {
    const users = this.getFromStorage(this.usersKey) || {};
    users[user.id] = user;
    this.putInStorage(this.usersKey, users);
  }
}
