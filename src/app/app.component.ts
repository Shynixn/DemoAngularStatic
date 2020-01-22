import {IdleMonitorService} from '@scullyio/ng-lib-v8';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
 constructor (private idle: IdleMonitorService) { } 

  title = 'my-first-project';
}
