import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import { productListReducer } from './reducers/productReducers';

//create redux store to use in react application => returns a list of products
const initialstate = {};
const reducer = combineReducers({
    productList: productListReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialstate,
    composeEnhancer(applyMiddleware(thunk))
    
    );

export default store;