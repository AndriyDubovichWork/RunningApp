import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import SideBarReducer from './SideBarReduce';

import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
  sidebar: SideBarReducer,

  form: formReducer,
});
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
