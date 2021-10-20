import { TestBed } from '@angular/core/testing';

import { BookRatingService } from './book-rating.service';
import {Book} from "./book";

describe('BookRatingService', () => {
  let service: BookRatingService;
  let book: Book;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookRatingService);

    book = {
      isbn: '',
      title: '',
      price: 1,
      rating: 3,
      description: ''
    }
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should rate up a book by one', () => {
    book.rating = 1;
    const ratedBook = service.rateUp(book);
    expect(ratedBook.rating).toBe(2);
  });

  it('should rate down a book by one', () => {
    book.rating = 2;
    const ratedBook = service.rateDown(book);
    expect(ratedBook.rating).toBe(1);
  });

  it('should  not rate higher than 5', () => {
    book.rating = 5;
    const ratedBook = service.rateUp(book);
    expect(ratedBook.rating).toBe(5);
  });

  it('should  not rate lower than 1', () => {
    book.rating = 1;
    const ratedBook = service.rateDown(book);
    expect(ratedBook.rating).toBe(1);
  });

});
