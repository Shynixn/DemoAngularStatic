import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {select} from "@ngrx/store";
import {allBooks} from "../logic/selectors/book.selector";
import * as M from 'materialize-css';

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

  constructor() {
  }

  ngOnInit() {
    this.listItems$ = Observable.create(observer => {
      let item1 : ListItem = {
        title : "meme",
        previewImage : "no",
        backgroundColor: "blue"
      };
      let item2 : ListItem = {
        title : "This is a very long title",
        previewImage : "no",
        backgroundColor: "light-blue"
      };
      let item3 : ListItem = {
        title : "This is a very long",
        previewImage : "no",
        backgroundColor: "blue"
      };
      let item4 : ListItem = {
        title : "This is a very long title",
        previewImage : "no",
        backgroundColor: "blue"
      };
      let item5 : ListItem = {
        title : "This is a very long title",
        previewImage : "no",
        backgroundColor: "blue"
      };
      let item6 : ListItem = {
        title : "This is a very long title",
        previewImage : "no",
        backgroundColor: "purple"
      };
      let item7 : ListItem = {
        title : "This is a very long title",
        previewImage : "no",
        backgroundColor: "green"
      };
      let item8 : ListItem = {
        title : "This is a very long title",
        previewImage : "no",
        backgroundColor: "orange"
      };

      observer.next(Array(item1, item2, item3, item4, item5, item6, item7, item8));

      observer.complete();
    });

    console.log("MEME");
  }

  ngAfterViewInit(){
    M.FormSelect.init(document.querySelector('select'));
  }
}
