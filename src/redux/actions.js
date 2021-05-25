import {NewUser} from './NewUser';
import {FetchFavorites} from './FetchFavorites';
export const LOG_IN = "LOG_IN";
export const LOADING = "LOADING";
export const LOADING_STYLE = "LOADING_STYLE";
export const USERNAME = "USERNAME";
export const STYLE_LOGIN = "STYLE_LOGIN";
export const STYLE_LOGOUT = "STYLE_LOGOUT";
export const USER_ID = "USER_ID";
export const CONNECTED = "CONNECTED";
export const FAVORITE_LOADING_STYLE = "FAVORITE_LOADING_STYLE";
export const FAVORITE_STYLE = "FAVORITE_STYLE";
export const FAVORITE_CHART_STYLE = "FAVORITE_CHART_STYLE";
export const FETCH_FAVORITES = "FETCH_FAVORITES";
export const FAVORITE_STYLE_0 = "FAVORITE_STYLE_0";
export const FAVORITE_CHART_STYLE_0 = "FAVORITE_CHART_STYLE_0";
export const FAVORITE_LOADING_STYLE_0 = "FAVORITE_LOADING_STYLE_0";
export const FAVORITE_STYLE_1 = "FAVORITE_STYLE_1";
export const FAVORITE_CHART_STYLE_1 = "FAVORITE_CHART_STYLE_1";
export const FAVORITE_LOADING_STYLE_1 = "FAVORITE_LOADING_STYLE_1";
export const FAVORITE_STYLE_2 = "FAVORITE_STYLE_2";
export const FAVORITE_CHART_STYLE_2 = "FAVORITE_CHART_STYLE_2";
export const FAVORITE_LOADING_STYLE_2 = "FAVORITE_LOADING_STYLE_2";
export const FAVORITE_STYLE_3 = "FAVORITE_STYLE_3";
export const FAVORITE_CHART_STYLE_3 = "FAVORITE_CHART_STYLE_3";
export const FAVORITE_LOADING_STYLE_3 = "FAVORITE_LOADING_STYLE_3";

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

export const favoriteStyleAction = (favoriteStyle) => async (dispatch, getState) => {
    dispatch({
        type: FAVORITE_STYLE,
        payload: favoriteStyle
    });
};

export const favoriteChartStyleAction = (favoriteChartStyle) => async (dispatch, getState) => {
    dispatch({
        type: FAVORITE_CHART_STYLE,
        payload: favoriteChartStyle
    });
};

export const fetchFavoritesAction = (userId) => async (dispatch, getState) => {
    const favorites = await FetchFavorites(userId);
    
    dispatch({
        type: FETCH_FAVORITES,
        payload: favorites
    });
};

export const favoriteStyleAction0 = (favoriteStyle0) => async (dispatch, getState) => {
    dispatch({
        type: FAVORITE_STYLE_0,
        payload: favoriteStyle0
    });
};

export const favoriteChartStyleAction0 = (favoriteChartStyle0) => async (dispatch, getState) => {
    dispatch({
        type: FAVORITE_CHART_STYLE_0,
        payload: favoriteChartStyle0
    });
};

export const favoriteLoadingStyleAction0 = (favoriteLoadingStyle0) => async (dispatch, getState) => {
    dispatch({
        type: FAVORITE_LOADING_STYLE_0,
        payload: favoriteLoadingStyle0
    });
};

export const favoriteStyleAction1 = (favoriteStyle1) => async (dispatch, getState) => {
    dispatch({
        type: FAVORITE_STYLE_1,
        payload: favoriteStyle1
    });
};

export const favoriteChartStyleAction1 = (favoriteChartStyle1) => async (dispatch, getState) => {
    dispatch({
        type: FAVORITE_CHART_STYLE_1,
        payload: favoriteChartStyle1
    });
};

export const favoriteLoadingStyleAction1 = (favoriteLoadingStyle1) => async (dispatch, getState) => {
    dispatch({
        type: FAVORITE_LOADING_STYLE_1,
        payload: favoriteLoadingStyle1
    });
};

export const favoriteStyleAction2 = (favoriteStyle2) => async (dispatch, getState) => {
    dispatch({
        type: FAVORITE_STYLE_2,
        payload: favoriteStyle2
    });
};

export const favoriteChartStyleAction2 = (favoriteChartStyle2) => async (dispatch, getState) => {
    dispatch({
        type: FAVORITE_CHART_STYLE_2,
        payload: favoriteChartStyle2
    });
};

export const favoriteLoadingStyleAction2 = (favoriteLoadingStyle2) => async (dispatch, getState) => {
    dispatch({
        type: FAVORITE_LOADING_STYLE_2,
        payload: favoriteLoadingStyle2
    });
};

export const favoriteStyleAction3 = (favoriteStyle3) => async (dispatch, getState) => {
    dispatch({
        type: FAVORITE_STYLE_3,
        payload: favoriteStyle3
    });
};

export const favoriteChartStyleAction3 = (favoriteChartStyle3) => async (dispatch, getState) => {
    dispatch({
        type: FAVORITE_CHART_STYLE_3,
        payload: favoriteChartStyle3
    });
};

export const favoriteLoadingStyleAction3 = (favoriteLoadingStyle3) => async (dispatch, getState) => {
    dispatch({
        type: FAVORITE_LOADING_STYLE_3,
        payload: favoriteLoadingStyle3
    });
};