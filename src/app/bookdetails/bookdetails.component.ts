import {Component, OnInit} from '@angular/core';
import * as M from 'materialize-css';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {
  /**
   * Link way.
   */
  way: Array<Breadcrumb> = [
    {
      displayName: "Collection",
      link: "/collection"
    },
    {
      displayName: "Demo Book",
      link: "/collection/1"
    }];
  /**
   * Is this component editable?
   */
  editable: boolean;
  /**
   * Editing book.
   */
  book: Book;
  /**
   * Edit Form.
   */
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.book = {
      name: "Demo Book",
      author: "Max Mustermann",
      description: "This is not a very long description.",
      isbn: "978-41231243",
      releaseDate: new Date()
    };
    this.convertBookToEditForm()
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
    this.editable = !this.editable;
    if (this.editable) {
      this.convertBookToEditForm();
    }
  }

  ngAfterViewChecked() {
    M.updateTextFields();
  }

  /**
   * Executes a book save.
   */
  onSave(submitData) {

    this.toggleEditState();
    M.toast({html: 'This book was successfully saved'});

    this.book.isbn = submitData.isbn;
    this.book.author = submitData.author;
    this.book.releaseDate = new Date(submitData.releaseDate);
  }

  /**
   * Converts the book to an edit form.
   */
  private convertBookToEditForm() {
    this.editForm = this.formBuilder.group({
      isbn: this.book.isbn,
      author: this.book.author,
      releaseDate: this.book.releaseDate.toDateString()
    });
  }
}
