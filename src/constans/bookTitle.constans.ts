import { Book } from "../models/Book";

export const BOOK_TITLE_SELECT = 'BOOK_TITLE_SELECT';

interface BookTitleSelectAction {
    type: typeof BOOK_TITLE_SELECT,
    payload: Book[]
}
export type BookActionTypes = BookTitleSelectAction
