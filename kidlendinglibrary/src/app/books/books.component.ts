import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  book: Book = {
    uuid: "123e4567-e89b-12d3-a456-426655440000",
    title: "הטיול הקצר",
    author: "נעמי שמר"
  };

  constructor() {}

  ngOnInit() {
  }

}
