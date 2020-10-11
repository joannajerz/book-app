import { BookActionTypes, BOOK_AUTHOR_SELECT } from './../constans/bookAuthor.constans';
import { BookState} from '../models/book';

const initialState: BookState = {
  books: [],
};

function bookAuthorReducer(
  state = initialState,
  action: BookActionTypes,
): BookState {
  switch (action.type) {
    case BOOK_AUTHOR_SELECT:
      return {
        books: action.payload,
      };
    default:
      return state;
  }
}
export default bookAuthorReducer;
