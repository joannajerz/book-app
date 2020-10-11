import { RootState } from '../reducers/index';

const selectAuthor = (state: RootState) => state.filters.author;

export default selectAuthor;
