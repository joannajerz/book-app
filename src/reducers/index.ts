import { combineReducers } from 'redux';
import bookTitleReducer from './bookTitle.reducer'


const rootReducer = combineReducers({
books: bookTitleReducer,
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;