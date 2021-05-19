import { incrementCount } from "./countService";
export const INCREMENT_COUNT = "INCREMENT_COUNT";
export const LOG_IN = "LOG_IN";
export const LOADING = "LOADING";
export const LOADING_STYLE = "LOADING_STYLE";
export const USERNAME = "USERNAME";

export const incrementCountAction = () => async (dispatch, getState) => {
	const newCount = await incrementCount();
	dispatch({
		type: INCREMENT_COUNT,
		payload: newCount,
	});
};

export const logInAction = () => (dispatch, getState) => {
	const isLoggedIn = true;
	dispatch({
		type: LOG_IN,
		payload: isLoggedIn,
	});
};

export const loadingAction = () => (dispatch, getState) => {
	const isLoading = true;
	dispatch({
		type: LOADING,
		payload: isLoading,
	});
};

export const notLoadingAction = () => (dispatch, getState) => {
	const isLoading = false;
	dispatch({
		type: LOADING,
		payload: isLoading,
	});
};

export const notLoadingStyleAction = () => (dispatch, getState) => {
    const loadingStyle = "loadingContainer displayNone";
    dispatch({
        type: LOADING_STYLE,
        payload: loadingStyle,
    });
};

export const usernameAction = (username) => (dispatch, getState) => {
    dispatch({
        type: USERNAME,
        payload: username,
    });
};