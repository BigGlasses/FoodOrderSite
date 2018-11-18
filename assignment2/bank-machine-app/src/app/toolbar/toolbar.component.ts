import { Component, OnInit } from '@angular/core';
import { AppConfigService } from '../services/app-config.service';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'bank-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  title: string;

  constructor(private appConfig: AppConfigService,
              private auth: AuthService,
              private route: ActivatedRoute,
              private router: Router) {
    this.title = this.appConfig.title;
  }

  ngOnInit() {
  }

  goBack() {

  }

  logout() {
    this.auth.logout();

  }

}
