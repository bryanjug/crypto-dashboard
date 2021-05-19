import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import {INCREMENT_COUNT, LOG_IN} from './actions';

const initialState = {
    count: 0,
    isLoggedIn: false,
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        default: 
            return state;
        case INCREMENT_COUNT:
            return {
                ...state,
                count: action.payload,
            }
        case LOG_IN:
            return {
                ...state,
                isLoggedIn: action.payload,
            }
    }
};

export default createStore(rootReducer, applyMiddleware(thunk));