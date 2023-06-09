import { combineReducers } from 'redux';
import { userReducer } from './userSlice';

const rootReducer = combineReducers({
  user: userReducer,
//   post: postReducer,
//   coment: comentReducer,
});

export default rootReducer;
