import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {select} from "@ngrx/store";
import {allBooks} from "../logic/selectors/book.selector";
import * as M from 'materialize-css';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  /**
   * List items.
   */
  listItems$: Observable<ListItem[]>;
  /**
   * Search form.
   */
  searchForm: FormGroup;

  constructor(private router : Router, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      query: '',
    });
    this.listItems$ = Observable.create(observer => {
      let item1: ListItem = {
        title: "meme",
        previewImage: "no",
        backgroundColor: "blue",
        detailLink : "book/1"
      };
      let item2: ListItem = {
        title: "This is a very long title",
        previewImage: "no",
        backgroundColor: "light-blue",
        detailLink : "book/2"
      };
      let item3: ListItem = {
        title: "This is a very long",
        previewImage: "no",
        backgroundColor: "blue",
        detailLink : "book/3"
      };
      let item4: ListItem = {
        title: "This is a very long title",
        previewImage: "no",
        backgroundColor: "blue",
        detailLink : "book/4"
      };
      let item5: ListItem = {
        title: "This is a very long title",
        previewImage: "no",
        backgroundColor: "blue",
        detailLink : "book/5"
      };
      let item6: ListItem = {
        title: "This is a very long title",
        previewImage: "no",
        backgroundColor: "purple",
        detailLink : "book/6"
      };
      let item7: ListItem = {
        title: "This is a very long title",
        previewImage: "no",
        backgroundColor: "green",
        detailLink : "book/7"
      };
      let item8: ListItem = {
        title: "This is a very long title",
        previewImage: "no",
        backgroundColor: "orange",
        detailLink : "book/8"
      };
      observer.next(Array(item1, item2, item3, item4, item5, item6, item7, item8));
      observer.complete();
    });
    console.log("MEME");
  }

  ngAfterViewInit() {
    M.FormSelect.init(document.querySelector('select'));
  }

  /**
   * Executes a search request.
   */
  onSubmitSearch(submitData) {
    this.router.navigate(['/collection'], {queryParams: {search: submitData.query}})
  }
}
