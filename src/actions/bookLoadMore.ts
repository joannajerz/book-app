import { BookActionTypes, FETCH_BOOK_SUCCESS, FETCH_MORE_BOOK_SUCCESS } from "../constans/bookLoadMore";
import { Book } from "../models/Book";

export function fetchBookSuccess(books: Book[]): BookActionTypes {
    return {
      type: FETCH_BOOK_SUCCESS,
      payload: books,
    };
  }
  export function fetchMoreBookSuccess(books: Book[]): BookActionTypes {
    return {
      type: FETCH_MORE_BOOK_SUCCESS,
      payload: books,
    };
  }