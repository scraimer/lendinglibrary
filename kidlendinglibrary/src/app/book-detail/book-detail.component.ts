import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BookService }  from '../book.service';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  @Input() book: Book;

  	constructor(
		private route: ActivatedRoute,
		private bookService: BookService,
		private location: Location
	) { }

  ngOnInit() {
	  this.getBook();
  }

  getBook(): void {
	  const uuid = this.route.snapshot.paramMap.get('uuid');
	  this.bookService.getBook(uuid)
	  	  .subscribe(book => this.book = book);
  }

	goBack(): void {
		this.location.back();
	}

}
