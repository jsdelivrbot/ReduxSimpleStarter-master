import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

// redux 를 불러와서 rootReducer 로 정의한다
// 글로벌 변수
const rootReducer = combineReducers({
  books : BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;