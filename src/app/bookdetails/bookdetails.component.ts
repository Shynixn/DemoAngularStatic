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

  /**
   * Creates a new instance of the constructor with dependencies.
   * @param formBuilder formBuilder dependency.
   */
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

  // region LifeCycle
  /**
   * Life Cycle method.
   */
  ngOnInit() {
  }

  /**
   * Life Cycle method.
   */
  ngAfterViewInit() {
    M.Datepicker.init(document.querySelectorAll('.datepicker'));
  }

  /**
   * Life Cycle method.
   */
  ngAfterViewChecked() {
    M.updateTextFields();
  }

  // endregion
  /**
   * Toggles the editable state.
   */
  toggleEditState() {
    this.editable = !this.editable;
    if (this.editable) {
      this.convertBookToEditForm();
    }
  }

  /**
   * Executes a book save.
   */
  onSave() {
    this.convertEditFormToBook();
    this.toggleEditState();
    M.toast({html: 'This book was successfully saved'});
  }

  /**
   * Converts the edit from to a book.
   */
  private convertEditFormToBook() {
    this.book.name = this.editForm.value.name;
    this.book.description = this.editForm.value.description;
    this.book.isbn = this.editForm.value.isbn;
    this.book.author = this.editForm.value.author;
    this.book.releaseDate = new Date(this.editForm.value.releaseDate);
  }

  /**
   * Converts the book to an edit form.
   */
  private convertBookToEditForm() {
    this.editForm = this.formBuilder.group({
      name: this.book.name,
      description: this.book.description,
      isbn: this.book.isbn,
      author: this.book.author,
      releaseDate: this.book.releaseDate.toDateString()
    });
  }
}
