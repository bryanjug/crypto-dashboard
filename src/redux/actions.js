import {NewUser} from './NewUser';
export const LOG_IN = "LOG_IN";
export const LOADING = "LOADING";
export const LOADING_STYLE = "LOADING_STYLE";
export const USERNAME = "USERNAME";
export const STYLE_LOGIN = "STYLE_LOGIN";
export const STYLE_LOGOUT = "STYLE_LOGOUT";
export const USER_ID = "USER_ID";
export const CONNECTED = "CONNECTED";
export const FAVORITE_LOADING_STYLE = "FAVORITE_LOADING_STYLE";

export const logInAction = (isLoggedIn) => (dispatch, getState) => {
	dispatch({
		type: LOG_IN,
		payload: isLoggedIn,
	});
};

export const loadingAction = (isLoading) => (dispatch, getState) => {
	dispatch({
		type: LOADING,
		payload: isLoading,
	});
};

export const loadingStyleAction = (loadingStyle) => (dispatch, getState) => {
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

export const styleLoginAction = (styleLogin) => (dispatch, getState) => {
    dispatch({
        type: STYLE_LOGIN,
        payload: styleLogin,
    });
};

export const styleLogoutAction = (styleLogout) => (dispatch, getState) => {
    dispatch({
        type: STYLE_LOGOUT,
        payload: styleLogout,
    });
};

export const userIdAction = (userId) => async (dispatch, getState) => {
    const connected = await NewUser(userId);

    dispatch({
        type: USER_ID,
        payload: userId,
    });

    dispatch({
        type: CONNECTED,
        payload: connected
    });
};

export const favoriteLoadingStyleAction = (favoriteLoadingStyle) => async (dispatch, getState) => {
    dispatch({
        type: FAVORITE_LOADING_STYLE,
        payload: favoriteLoadingStyle
    });
};
