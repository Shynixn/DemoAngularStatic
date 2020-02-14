import {Component, OnInit} from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {
  /**
   * Is this component editable?
   */
  editable: boolean;
  /**
   * Editing book.
   */
  book: Book;

  constructor() {
    this.book = {
      name : "Demo Book",
      author : "Max Mustermann",
      description : "This is not a very long description.",
      isbn : "978-41231243",
      releaseDate : new Date()
    }
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    M.Datepicker.init(document.querySelectorAll('.datepicker'));
  }

  /**
   * Toggles the editable state.
   */
  toggleEditState() {
    this.editable = !this.editable
  }

  save() {
    this.toggleEditState();
    M.toast({html: 'This book was successfully saved'})
  }
}
