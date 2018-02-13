import { Injectable } from '@angular/core';
import { Book } from './book';
import { BOOKS } from './mock-books';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class BookService {

  constructor(private messageService: MessageService) {}

  getBooks(): Observable<Book[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('BookService: fetched heroes');

    return of (BOOKS);
  }

	getBook(uuid: string) : Observable<Book> {

		// Todo: send the message _after_ fetching the hero
		this.messageService.add(`BookService: fetched book uuid=${uuid}`);
		return of(BOOKS.find(book => book.uuid === uuid));
	}
}
