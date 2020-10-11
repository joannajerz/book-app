import { BOOK_TITLE_SELECT, BookActionTypes } from './../constans/bookTitle.constans';
import { Book } from '../models/Book';

  
  
  export default function selectTitle(selectedTitle: Book[]): BookActionTypes {
    return {
      type: BOOK_TITLE_SELECT,
      payload: selectedTitle,
    };
  }
  