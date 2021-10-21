import {Component, OnInit, Output} from '@angular/core';
import {Book} from "../shared/book";
import {BookRatingService} from "../shared/book-rating.service";

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  books: Book[] = [];
  MAX_RATING = this.ratingService.MAX_RATING;
  MIN_RATING = this.ratingService.MIN_RATING;

  constructor(private ratingService: BookRatingService) {
    this.books = [
      {
        isbn: '000',
        title: 'Angular',
        description: 'Grundlagen von Angular',
        rating: 5,
        price: 40
      },
      {
        isbn: '111',
        title: 'React',
        description: 'Grundlagen von React',
        rating: 4,
        price: 41
      }
    ]
  }

  ngOnInit(): void {}

  rateUp(book: Book){
    const ratedBook = this.ratingService.rateUp(book);
    this.updateList(ratedBook);
  }

  rateDown(book: Book){
    const ratedBook = this.ratingService.rateDown(book);
    this.updateList(ratedBook);
  }

  updateList(ratedBook: Book) {
    this.books = this.books.map(book => (book.isbn === ratedBook.isbn) ? ratedBook : book)
  }

}

