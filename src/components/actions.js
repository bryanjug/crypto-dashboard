import {incrementCount} from './countService';
export const INCREMENT_COUNT = "INCREMENT_COUNT";
export const LOG_IN = "LOG_IN";

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
}