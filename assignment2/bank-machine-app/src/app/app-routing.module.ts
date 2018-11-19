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
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {state: 'login'}
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {state: 'home'}
  },
  {
    path: 'home/withdraw',
    component: WithdrawComponent,
    data: {state: 'pastHome'}
  },
  {
    path: 'home/deposit',
    component: DepositComponent,
    data: {state: 'pastHome'}
  },
  {
    path: 'home/transfer',
    component: TransferComponent,
    data: {state: 'pastHome'}
  },
  {
    path: 'home/accounts',
    component: AccountsComponent,
    data: {state: 'complete'}
  },
  {
    path: 'home/complete',
    component: AccountsComponent,
    data: {state: 'complete'}
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
