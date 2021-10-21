import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {Book} from "../shared/book";
import {BookRatingService} from "../shared/book-rating.service";

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  @Input() book?: Book;
  @Input() max = 7;
  @Input() min = 0;

  @Output() rateUp = new EventEmitter<Book>();
  @Output() rateDown = new EventEmitter<Book>();

  constructor() { }

  ngOnInit(): void {}

  doRateUp(){
    this.rateUp.emit(this.book);
  }

  doRateDown(){
    this.rateDown.emit(this.book);
  }

}
