import { BookActionTypes, BOOK_AUTHOR_SELECT, BOOK_TITLE_SELECT, BOOK_LANGUAGE_SELECT } from '../constans/bookFilter.constans';
import { FiltersState} from '../models/Book';

const initialState: FiltersState = {
  author: "",
  title: "",
  language: "en"
};

function bookFilterReducer(
  state = initialState,
  action: BookActionTypes,
): FiltersState {
  switch (action.type) {
    case BOOK_AUTHOR_SELECT:
      return {
        author: action.payload,
        title: state.title,
        language: state.language
      };
    case BOOK_TITLE_SELECT:
        return {
          author: state.author,
          title: action.payload,
          language: state.language
        };
    case BOOK_LANGUAGE_SELECT:
      return {
        author: state.author,
        title: state.title,
        language: action.payload
      };
    default:
      return state;
  }
}
export default bookFilterReducer;
