import { combineReducers } from 'redux';
import bookTitleReducer from './bookTitle.reducer'
import bookAuthorReducer from './bookAuthor.reducer'


const rootReducer = combineReducers({
book: bookTitleReducer,
author: bookAuthorReducer,
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;