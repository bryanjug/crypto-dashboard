import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
	INCREMENT_COUNT,
	LOG_IN,
	LOADING,
	LOADING_STYLE,
	USERNAME,
} from "./actions";

const initialState = {
	count: 0,
	isLoggedIn: false,
	isLoading: true,
    loadingStyle: "loadingContainer displayInline",
    username: "",
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
		case INCREMENT_COUNT:
			return {
				...state,
				count: action.payload,
			};
		case LOG_IN:
			return {
				...state,
				isLoggedIn: action.payload,
			};
		case LOADING:
			return {
				...state,
				isLoading: action.payload,
			};
		case LOADING_STYLE:
			return {
				...state,
				loadingStyle: action.payload,
			};
		case USERNAME:
			return {
				...state,
				username: action.payload,
			};
	}
};

export default createStore(rootReducer, applyMiddleware(thunk));
