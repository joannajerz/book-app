import { Book } from './../models/Book';
export const FETCH_BOOK_SUCCESS = 'FETCH_BOOK_SUCCESS';
export const FETCH_MORE_BOOK_SUCCESS = 'FETCH_MORE_BOOK_SUCCESS';


interface FetchBookSuccess{
    type: typeof FETCH_BOOK_SUCCESS,
    payload: Book[]
}

interface FetchMoreBookSuccess{
    type: typeof FETCH_MORE_BOOK_SUCCESS,
    payload: Book[]
}

export type BookActionTypes = FetchBookSuccess | FetchMoreBookSuccess 