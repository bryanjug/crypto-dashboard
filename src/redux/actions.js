import {NewUser} from './NewUser';
import {FetchFavorites} from './FetchFavorites';
import {BitcoinGraphData} from './BitcoinGraphData';
import {FavoritesGraphData} from './FavoritesGraphData';
import {TrendingData} from './TrendingData';
import {ChangesData} from './ChangesData';
import {PricesData} from './PricesData';
import {NewsData} from './NewsData';
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
export const FAVORITE_0 = "FAVORITE_0";
export const FAVORITE_1 = "FAVORITE_1";
export const FAVORITE_2 = "FAVORITE_2";
export const FAVORITE_3 = "FAVORITE_3";
export const FAVORITES_ALERT_STYLE = "FAVORITES_ALERT_STYLE";
export const FETCHED_FAVORITES = "FETCHED_FAVORITES";
export const COINS = "COINS";
export const FAVORITES_LIST_BUTTON_STYLE = "FAVORITES_LIST_BUTTON_STYLE";
export const SELECTED_FAVORITE = "SELECTED_FAVORITE";
export const FAVORITE_REMOVE_ICON_STYLE = "FAVORITE_REMOVE_ICON_STYLE";
export const FAVORITE_LIST_START = "FAVORITE_LIST_START";
export const FAVORITE_LIST_END = "FAVORITE_LIST_END";
export const COINS_ALL = "COINS_ALL";
export const FAVORITE_BACK_BUTTON_STYLE = "FAVORITE_BACK_BUTTON_STYLE";
export const FAVORITE_NEXT_BUTTON_STYLE = "FAVORITE_NEXT_BUTTON_STYLE";
export const BITCOIN_GRAPH_DATA = "BITCOIN_GRAPH_DATA";
export const FAVORITES_GRAPH_DATA = "FAVORITES_GRAPH_DATA";
export const FETCHED_FAVORITES_GRAPH_DATA = "FETCHED_FAVORITES_GRAPH_DATA";
export const TRENDING_DATA = "TRENDING_DATA";
export const TRENDING_LOADING_STYLE = "TRENDING_LOADING_STYLE";
export const TRENDING_LIST_STYLE = "TRENDING_LIST_STYLE";
export const CHANGES_DATA = "CHANGES_DATA";
export const CHANGES_LOADING_STYLE = "CHANGES_LOADING_STYLE";
export const CHANGES_LIST_STYLE = "CHANGES_LIST_STYLE";
export const PRICES_DATA = "PRICES_DATA";
export const NEWS_DATA = "NEWS_DATA";
export const FETCHED_NEWS_DATA = "FETCHED_NEWS_DATA";

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

export const favoriteLoadingStyleAction = (favoriteLoadingStyle) => (dispatch, getState) => {
    dispatch({
        type: FAVORITE_LOADING_STYLE,
        payload: favoriteLoadingStyle
    });
};

export const favoriteStyleAction = (favoriteStyle) => (dispatch, getState) => {
    dispatch({
        type: FAVORITE_STYLE,
        payload: favoriteStyle
    });
};

export const favoriteChartStyleAction = (favoriteChartStyle) => (dispatch, getState) => {
    dispatch({
        type: FAVORITE_CHART_STYLE,
        payload: favoriteChartStyle
    });
};

export const fetchFavoritesAction = (userId, fetchedFavorites) => async (dispatch, getState) => {
    // const favorites = await FetchFavorites(userId);
    // dispatch({
    //     type: FETCH_FAVORITES,
    //     payload: favorites
    // });

    // dispatch({
    //     type: FETCHED_FAVORITES,
    //     payload: fetchedFavorites
    // });
};

export const favoriteStyleAction0 = (favoriteStyle0) => (dispatch, getState) => {
    dispatch({
        type: FAVORITE_STYLE_0,
        payload: favoriteStyle0
    });
};

export const favoriteChartStyleAction0 = (favoriteChartStyle0) => (dispatch, getState) => {
    dispatch({
        type: FAVORITE_CHART_STYLE_0,
        payload: favoriteChartStyle0
    });
};

export const favoriteLoadingStyleAction0 = (favoriteLoadingStyle0) => (dispatch, getState) => {
    dispatch({
        type: FAVORITE_LOADING_STYLE_0,
        payload: favoriteLoadingStyle0
    });
};

export const favoriteStyleAction1 = (favoriteStyle1) => (dispatch, getState) => {
    dispatch({
        type: FAVORITE_STYLE_1,
        payload: favoriteStyle1
    });
};

export const favoriteChartStyleAction1 = (favoriteChartStyle1) => (dispatch, getState) => {
    dispatch({
        type: FAVORITE_CHART_STYLE_1,
        payload: favoriteChartStyle1
    });
};

export const favoriteLoadingStyleAction1 = (favoriteLoadingStyle1) => (dispatch, getState) => {
    dispatch({
        type: FAVORITE_LOADING_STYLE_1,
        payload: favoriteLoadingStyle1
    });
};

export const favoriteStyleAction2 = (favoriteStyle2) => (dispatch, getState) => {
    dispatch({
        type: FAVORITE_STYLE_2,
        payload: favoriteStyle2
    });
};

export const favoriteChartStyleAction2 = (favoriteChartStyle2) => (dispatch, getState) => {
    dispatch({
        type: FAVORITE_CHART_STYLE_2,
        payload: favoriteChartStyle2
    });
};

export const favoriteLoadingStyleAction2 = (favoriteLoadingStyle2) => (dispatch, getState) => {
    dispatch({
        type: FAVORITE_LOADING_STYLE_2,
        payload: favoriteLoadingStyle2
    });
};

export const favoriteStyleAction3 = (favoriteStyle3) => (dispatch, getState) => {
    dispatch({
        type: FAVORITE_STYLE_3,
        payload: favoriteStyle3
    });
};

export const favoriteChartStyleAction3 = (favoriteChartStyle3) => (dispatch, getState) => {
    dispatch({
        type: FAVORITE_CHART_STYLE_3,
        payload: favoriteChartStyle3
    });
};

export const favoriteLoadingStyleAction3 = (favoriteLoadingStyle3) => (dispatch, getState) => {
    dispatch({
        type: FAVORITE_LOADING_STYLE_3,
        payload: favoriteLoadingStyle3
    });
};

export const favorite0Action = (favorite0) => (dispatch, getState) => {
    dispatch({
        type: FAVORITE_0,
        payload: favorite0
    });
};

export const favorite1Action = (favorite1) => (dispatch, getState) => {
    dispatch({
        type: FAVORITE_1,
        payload: favorite1
    });
};

export const favorite2Action = (favorite2) => (dispatch, getState) => {
    dispatch({
        type: FAVORITE_2,
        payload: favorite2
    });
};

export const favorite3Action = (favorite3) => (dispatch, getState) => {
    dispatch({
        type: FAVORITE_3,
        payload: favorite3
    });
};

export const favoritesAlertStyleAction = (favoritesAlertStyle) => (dispatch, getState) => {
    dispatch({
        type: FAVORITES_ALERT_STYLE,
        payload: favoritesAlertStyle
    });
};

export const coinsAction = (coins) => (dispatch, getState) => {
    dispatch({
        type: COINS,
        payload: coins
    });
};

export const favoritesListButtonStyleAction = (favoritesListButtonStyle) => (dispatch, getState) => {
    dispatch({
        type: FAVORITES_LIST_BUTTON_STYLE,
        payload: favoritesListButtonStyle
    });
};

export const selectedFavoriteAction = (selectedFavorite) => (dispatch, getState) => {
    dispatch({
        type: SELECTED_FAVORITE,
        payload: selectedFavorite
    });
};

export const favoriteRemoveIconStyleAction = (favoriteRemoveIconStyle) => (dispatch, getState) => {
    dispatch({
        type: FAVORITE_REMOVE_ICON_STYLE,
        payload: favoriteRemoveIconStyle
    });
};

export const favoriteListStartAction = (favoriteListStart) => (dispatch, getState) => {
    dispatch({
        type: FAVORITE_LIST_START,
        payload: favoriteListStart
    });
};

export const favoriteListEndAction = (favoriteListEnd) => (dispatch, getState) => {
    dispatch({
        type: FAVORITE_LIST_END,
        payload: favoriteListEnd
    });
};

export const coinsAllAction = (coinsAll) => (dispatch, getState) => {
    dispatch({
        type: COINS_ALL,
        payload: coinsAll
    });
};

export const favoriteBackButtonStyleAction = (favoriteBackButtonStyle) => (dispatch, getState) => {
    dispatch({
        type: FAVORITE_BACK_BUTTON_STYLE,
        payload: favoriteBackButtonStyle
    });
};

export const favoriteNextButtonStyleAction = (favoriteNextButtonStyle) => (dispatch, getState) => {
    dispatch({
        type: FAVORITE_NEXT_BUTTON_STYLE,
        payload: favoriteNextButtonStyle
    });
};

export const bitcoinGraphDataAction = () => async (dispatch, getState) => {
    const data = await BitcoinGraphData();

    dispatch({
        type: BITCOIN_GRAPH_DATA,
        payload: data
    });
};

export const favoritesGraphDataAction = (favorites, fetched) => async (dispatch, getState) => {
    // const data = await FavoritesGraphData(favorites);
    // dispatch({
    //     type: FAVORITES_GRAPH_DATA,
    //     payload: data
    // });

    // dispatch({
    //     type: FETCHED_FAVORITES_GRAPH_DATA,
    //     payload: fetched
    // });
};

export const trendingDataAction = () => async (dispatch, getState) => {
    const data = await TrendingData();
    const trendingLoadingStyle = "displayNone";
    const trendingListStyle = "row text-center trendingList";

    dispatch({
        type: TRENDING_DATA,
        payload: data
    });

    dispatch({
        type: TRENDING_LOADING_STYLE,
        payload: trendingLoadingStyle
    });

    dispatch({
        type: TRENDING_LIST_STYLE,
        payload: trendingListStyle
    });
};

export const changesDataAction = () => async (dispatch, getState) => {
    const changesData = await ChangesData();
    const changesLoadingStyle = "displayNone";
    const changesListStyle = "row text-center changesList";

    dispatch({
        type: CHANGES_DATA,
        payload: changesData
    });

    dispatch({
        type: CHANGES_LOADING_STYLE,
        payload: changesLoadingStyle
    });

    dispatch({
        type: CHANGES_LIST_STYLE,
        payload: changesListStyle
    });
};

export const pricesDataAction = (page) => async (dispatch, getState) => {
    const pricesData = await PricesData(page);

    dispatch({
        type: PRICES_DATA,
        payload: pricesData
    });
};

export const newsDataAction = () => async (dispatch, getState) => {
    const data = await NewsData();

    dispatch({
        type: NEWS_DATA,
        payload: data
    });

    dispatch({
        type: FETCHED_NEWS_DATA,
        payload: true
    })
};
