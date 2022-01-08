import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from './reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // esta es para desarrollo activa el redux extension

const configureStore = initialState => {
    return process.env.NODE_ENV === 'development' 
        ? createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunk)))
        : createStore(rootReducer, initialState, applyMiddleware(thunk));
}
export default configureStore;