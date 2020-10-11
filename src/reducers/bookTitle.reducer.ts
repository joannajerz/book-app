import { BookActionTypes, BOOK_TITLE_SELECT } from './../constans/bookTitle.constans';
import { BookState } from '../models/Book';

const initialState: BookState = {
  books: [],
};

function bookTitleReducer(
  state = initialState,
  action: BookActionTypes,
): BookState {
  switch (action.type) {
    case BOOK_TITLE_SELECT:
      return {
        books: action.payload,
      };
    default:
      return state;
  }
}
export default bookTitleReducer;
