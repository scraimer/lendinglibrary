import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BOOKS } from '../mock-books'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books = BOOKS;
  selectedBook: Book;
  	
	onSelect(book: Book) : void {
		this.selectedBook = book;
	}
		
  constructor() {}

  ngOnInit() {
  }

}
