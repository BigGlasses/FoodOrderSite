import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './screens/login/login.component';
import { HomeComponent } from './screens/home/home.component';
import { WithdrawComponent } from './screens/home/withdraw/withdraw.component';
import { DepositComponent } from './screens/home/deposit/deposit.component';
import { TransferComponent } from './screens/home/transfer/transfer.component';
import { AccountsComponent } from './screens/home/accounts/accounts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from './common/common.module';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    BottomBarComponent,
    MainComponent,
    LoginComponent,
    HomeComponent,
    WithdrawComponent,
    DepositComponent,
    TransferComponent,
    AccountsComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
