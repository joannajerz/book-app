export const BOOK_AUTHOR_SELECT = 'BOOK_AUTHOR_SELECT';
export const BOOK_LANGUAGE_SELECT = 'BOOK_LANGUAGE_SELECT';
export const BOOK_TITLE_SELECT = 'BOOK_TITLE_SELECT';

interface BookLanguageSelectAction {
    type: typeof BOOK_LANGUAGE_SELECT,
    payload: string
}
interface BookAuthorSelectAction {
    type: typeof BOOK_AUTHOR_SELECT,
    payload: string
}
interface BookTitleSelectAction {
    type: typeof BOOK_TITLE_SELECT,
    payload: string
}
export type BookActionTypes = BookAuthorSelectAction | BookTitleSelectAction | BookLanguageSelectAction
