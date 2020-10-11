import { combineReducers } from 'redux';
import bookTitleReducer from './bookTitle.reducer'


const rootReducer = combineReducers({
book: bookTitleReducer,
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;