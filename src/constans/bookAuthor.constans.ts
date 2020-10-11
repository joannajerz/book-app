import { Book } from "../models/Book";

export const BOOK_AUTHOR_SELECT = 'BOOK_AUTHOR_SELECT';

interface BookAuthorSelectAction {
    type: typeof BOOK_AUTHOR_SELECT,
    payload: Book[]
}
export type BookActionTypes = BookAuthorSelectAction
