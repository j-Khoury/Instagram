import {createStore, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';
import rootReducer from './reducer'; // Your root reducer

const store = createStore(rootReducer);

export default store;
