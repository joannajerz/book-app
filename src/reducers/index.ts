import { combineReducers } from 'redux';
import bookFilterReducer from './bookFilter.reducer'
import bookLoadMoreReducer from './bookLoadMore.reducer'



const rootReducer = combineReducers({
filters: bookFilterReducer,
books: bookLoadMoreReducer,
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;