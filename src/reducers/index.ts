import { combineReducers } from 'redux';
import bookFilterReducer from './bookFilter.reducer'



const rootReducer = combineReducers({
filters: bookFilterReducer,
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;