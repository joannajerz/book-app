import { RootState } from '../reducers/index';

const selectBook = (state: RootState) => state.book.books;

export default selectBook;
