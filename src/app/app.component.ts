import {IdleMonitorService, ScullyRoutesService} from '@scullyio/ng-lib-v8';
import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
 constructor (private idle: IdleMonitorService,  public scully: ScullyRoutesService, private translate: TranslateService) {
   translate.setDefaultLang("en");
 }

  title = 'my-first-project';
}
