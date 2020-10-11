import { RootState } from '../reducers/index';

const selectAuthor = (state: RootState) => state.author.books;

export default selectAuthor;
