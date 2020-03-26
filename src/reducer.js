import { combineReducers } from 'redux';
import { reducer as firebase } from 'react-redux-firebase';
//import { firebaseReducer } from 'react-redux-firebase;'

const rootReducer = combineReducers({
  firebase
});

export default rootReducer;
