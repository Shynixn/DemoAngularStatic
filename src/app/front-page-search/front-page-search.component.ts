import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Form, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-front-page-search',
  templateUrl: './front-page-search.component.html',
  styleUrls: ['./front-page-search.component.css']
})
export class FrontPageSearchComponent implements OnInit {
  searchForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      query: '',
    });
  }

  /**
   * Executes a redirection to the search page.
   */
  onSubmitSearch(submitData) {
    this.router.navigate(['/collection'], {queryParams: {search: submitData.query}})
  }
}
