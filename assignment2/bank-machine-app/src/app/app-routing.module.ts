import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './screens/home/home.component';
import { WithdrawComponent } from './screens/home/withdraw/withdraw.component';
import { DepositComponent } from './screens/home/deposit/deposit.component';
import { TransferComponent } from './screens/home/transfer/transfer.component';
import { LoginComponent } from './screens/login/login.component';
import { AccountsComponent } from './screens/home/accounts/accounts.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'home/withdraw',
    component: WithdrawComponent
  },
  {
    path: 'home/deposit',
    component: DepositComponent
  },
  {
    path: 'home/transfer',
    component: TransferComponent
  },
  {
    path: 'home/accounts',
    component: AccountsComponent
  },
  {
    path: 'home/complete',
    component: AccountsComponent
  },
  {
    path: '*',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
