import { Component, OnInit } from '@angular/core';
import { AppConfigService } from '../services/app-config.service';

@Component({
  selector: 'bank-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  title: string;

  constructor(private appConfig: AppConfigService) {
    this.title = this.appConfig.title;
  }

  ngOnInit() {
  }

}
