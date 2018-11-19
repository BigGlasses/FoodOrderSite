import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppConfigService } from '../../services/app-config.service';

@Component({
  selector: 'bank-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  title = 'Home';


  constructor(private appConfig: AppConfigService) {
    // this.appConfig.
  }

  ngOnInit() {
  }

}
