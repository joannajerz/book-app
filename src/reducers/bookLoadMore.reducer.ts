import { BookActionTypes, FETCH_BOOK_SUCCESS, FETCH_MORE_BOOK_SUCCESS } from "../constans/bookLoadMore";
import { BooksState } from "../models/Book";


const initialState: BooksState = {
  books: [],
};

export default function bookLoadMoreReducer(state = initialState, action: BookActionTypes):
BooksState {
  switch (action.type) {
    case FETCH_BOOK_SUCCESS:
      return {
        books:  [...action.payload]
      };
    case FETCH_MORE_BOOK_SUCCESS:
      return {
        books: [...state.books, ...action.payload],
      };
    default:
      return state;
  }
}
