import { Injectable } from '@angular/core';
import { Book } from './book';
import { BOOKS } from './mock-books';

@Injectable()
export class BookService {

  constructor() { }

  getBooks(): Book[] { return BOOKS; }
}
