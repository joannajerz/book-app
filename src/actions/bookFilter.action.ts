import { BOOK_AUTHOR_SELECT, BookActionTypes, BOOK_LANGUAGE_SELECT, BOOK_TITLE_SELECT } from '../constans/bookFilter.constans'


  export  function selectAuthor(selectedAuthor: string): BookActionTypes {
    return {
      type: BOOK_AUTHOR_SELECT,
      payload: selectedAuthor,
    };
  }
  export  function selectLanguage(selectedLanguage: string): BookActionTypes {
    return {
      type: BOOK_LANGUAGE_SELECT,
      payload: selectedLanguage,
    };
  }
    
  export function selectTitle(selectedTitle: string): BookActionTypes {
    return {
      type: BOOK_TITLE_SELECT,
      payload: selectedTitle,
    };
  }