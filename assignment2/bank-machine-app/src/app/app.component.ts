import { Component } from '@angular/core';
import { AppConfigService } from './services/app-config.service';
import { RouterOutlet } from '@angular/router';
import { routerTransition, slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    // slideInAnimation
    routerTransition
    // animation triggers go here
  ]
})
export class AppComponent {
  title: string;

  constructor(private appConfig: AppConfigService) {
    this.title = this.appConfig.title;
  }

  prepareRoute(outlet: RouterOutlet) {
    // console.log('Router state: ', outlet.activatedRouteData['state']);
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['state'];
    // return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
