import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  /**
   * List of breadcrumbs.
   */
  @Input()
  listOfBreadCrumbs: Array<Breadcrumb> = [];

  constructor() {
  }

  ngOnInit() {
  }
}
