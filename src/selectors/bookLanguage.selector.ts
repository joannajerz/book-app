import { RootState } from '../reducers/index';

const selectLanguage = (state: RootState) => state.filters.language;

export default selectLanguage;
