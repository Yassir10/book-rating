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
  isIncButtonDisabled?:boolean;
  isDecButtonDisabled?: boolean;

  @Output() rateUp = new EventEmitter<Book>();
  @Output() rateDown = new EventEmitter<Book>();

  constructor(private ratingService: BookRatingService) { }

  ngOnInit(): void {
    if(this.book){
      this.isIncButtonDisabled = this.ratingService.isIncButtonDisabled(this.book)
      this.isDecButtonDisabled = this.ratingService.isDecButtonDisabled(this.book)
    }
  }

  doRateUp(){
    this.rateUp.emit(this.book);
  }

  doRateDown(){
    this.rateDown.emit(this.book);
  }

}
