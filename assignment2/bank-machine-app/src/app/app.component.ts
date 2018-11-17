import { Component } from '@angular/core';
import { AppConfigService } from './services/app-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;

  constructor(private appConfig: AppConfigService) {
    this.title = this.appConfig.title;
  }
}
