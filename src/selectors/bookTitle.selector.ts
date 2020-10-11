import { RootState } from '../reducers/index';

const selectBook = (state: RootState) => state.filters.title;

export default selectBook;
