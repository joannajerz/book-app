import { BOOK_AUTHOR_SELECT, BookActionTypes } from '../constans/bookAuthor.constans'
import { Book } from '../models/Book';

  
  
  export default function selectAuthor(selectedAuthor: Book[]): BookActionTypes {
    return {
      type: BOOK_AUTHOR_SELECT,
      payload: selectedAuthor,
    };
  }
  