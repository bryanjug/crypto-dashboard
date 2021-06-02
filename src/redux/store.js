import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
	LOG_IN,
	LOADING,
	LOADING_STYLE,
    USERNAME,
    STYLE_LOGIN,
    STYLE_LOGOUT,
	USER_ID,
	CONNECTED,
	FAVORITE_LOADING_STYLE,
	FAVORITE_STYLE,
	FAVORITE_CHART_STYLE,
	FETCH_FAVORITES,
	FAVORITE_STYLE_0,
	FAVORITE_CHART_STYLE_0,
	FAVORITE_LOADING_STYLE_0,
	FAVORITE_STYLE_1,
	FAVORITE_CHART_STYLE_1,
	FAVORITE_LOADING_STYLE_1,
	FAVORITE_STYLE_2,
	FAVORITE_CHART_STYLE_2,
	FAVORITE_LOADING_STYLE_2,
	FAVORITE_STYLE_3,
	FAVORITE_CHART_STYLE_3,
	FAVORITE_LOADING_STYLE_3,
	FAVORITE_0,
	FAVORITE_1,
	FAVORITE_2,
	FAVORITE_3,
	FAVORITES_ALERT_STYLE,
	FETCHED_FAVORITES,
	COINS,
	FAVORITES_LIST_BUTTON_STYLE,
	SELECTED_FAVORITE,
	FAVORITE_REMOVE_ICON_STYLE,
	FAVORITE_LIST_START,
	FAVORITE_LIST_END,
	COINS_ALL,
	FAVORITE_BACK_BUTTON_STYLE,
	FAVORITE_NEXT_BUTTON_STYLE,
	BITCOIN_GRAPH_DATA,
	FAVORITES_GRAPH_DATA,
	FETCHED_FAVORITES_GRAPH_DATA,
	TRENDING_DATA,
	TRENDING_LOADING_STYLE,
	TRENDING_LIST_STYLE,
	CHANGES_DATA,
	CHANGES_LOADING_STYLE,
	CHANGES_LIST_STYLE,
	PRICES_DATA,
	NEWS_DATA,
	FETCHED_NEWS_DATA
} from "./actions";

const initialState = {
	count: 0,
	isLoggedIn: false,
    username: "",
    accessToken: "",
    styleLogin: "googleBtn displayInline",
    styleLogout: "googleBtn displayNone",
	userId: "",
	favoriteStyle: "displayNone",
	favoriteChartStyle: "displayNone",
	connected: false,
	favoriteLoadingStyle: "favoriteLoading",
	favorites: (["Bitcoin", "Ethereum", "Litecoin", "Monero"]),
	favoriteStyle0: "displayNone",
	favoriteChartStyle0: "displayNone",
	favoriteLoadingStyle0: "favoriteLoading",
	favoriteStyle1: "displayNone",
	favoriteChartStyle1: "displayNone",
	favoriteLoadingStyle1: "favoriteLoading",
	favoriteStyle2: "displayNone",
	favoriteChartStyle2: "displayNone",
	favoriteLoadingStyle2: "favoriteLoading",
	favoriteStyle3: "displayNone",
	favoriteChartStyle3: "displayNone",
	favoriteLoadingStyle3: "favoriteLoading",
	favorite0: "col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 favorite",
	favorite1: "col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 favorite",
	favorite2: "col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 favorite",
	favorite3: "col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 favorite",
	favoritesAlertStyle: "alert alert-light alert-dismissible fade show favoritesAlert displayNone",
	fetchedFavorites: false,
	coins: ([]),
	favoritesListButtonStyle: "displayNone",
	selectedFavorite: "",
	favoriteRemoveIconStyle: "displayNone",
	favoriteListStart: 0,
	favoriteListEnd: 100,
	coinsAll: ({}),
	favoriteBackButtonStyle: "displayNone",
	favoriteNextButtonStyle: "favoritesListNext",
	bitcoinGraphData: ({}),
	favoritesGraphData: (
		[
			[1500, 3500, 2000, 5000, 3000, 7000, 3000, 38521, -3.9593475742828677],
			[1500, 3500, 2000, 5000, 3000, 7000, 3000, 9992, 7],
			[1500, 3500, 2000, 5000, 3000, 7000, 3000, 5286, -2],
			[1500, 3500, 2000, 5000, 3000, 7000, 3000, 10443, 9]
		]
	),
	fetchedFavoritesGraphData: false,
	trendingData: ([]),
	trendingLoadingStyle: "col-12 trendingLoading text-center",
	trendingListStyle: "displayNone",
	changesData: ([]),
	changesLoadingStyle: "changesLoading text-center",
	changesListStyle: "displayNone",
	pricesData: ({}),
	newsData: ({}),
	fetchedNewsData: false,
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
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
        case STYLE_LOGIN:
            return {
                ...state,
                styleLogin: action.payload,
            };
        case STYLE_LOGOUT:
            return {
                ...state,
                styleLogout: action.payload,
            };
        case USER_ID:
            return {
                ...state,
                userId: action.payload,
			};
		case CONNECTED:
			return {
				...state,
				connected: action.payload,
			}
		case FAVORITE_LOADING_STYLE:
			return {
				...state,
				favoriteLoadingStyle: action.payload,
			}
		case FAVORITE_STYLE:
			return {
				...state,
				favoriteStyle: action.payload,
			}
		case FAVORITE_CHART_STYLE:
			return {
				...state,
				favoriteChartStyle: action.payload,
			}
		case FETCH_FAVORITES:
			return {
				...state,
				favorites: action.payload,
			}
		case FAVORITE_STYLE_0:
			return {
				...state,
				favoriteStyle0: action.payload,
			}
		case FAVORITE_CHART_STYLE_0:
			return {
				...state,
				favoriteChartStyle0: action.payload,
			}
		case FAVORITE_LOADING_STYLE_0:
			return {
				...state,
				favoriteLoadingStyle0: action.payload,
			}
		case FAVORITE_STYLE_1:
			return {
				...state,
				favoriteStyle1: action.payload,
			}
		case FAVORITE_CHART_STYLE_1:
			return {
				...state,
				favoriteChartStyle1: action.payload,
			}
		case FAVORITE_LOADING_STYLE_1:
			return {
				...state,
				favoriteLoadingStyle1: action.payload,
			}
		case FAVORITE_STYLE_2:
			return {
				...state,
				favoriteStyle2: action.payload,
			}
		case FAVORITE_CHART_STYLE_2:
			return {
				...state,
				favoriteChartStyle2: action.payload,
			}
		case FAVORITE_LOADING_STYLE_2:
			return {
				...state,
				favoriteLoadingStyle2: action.payload,
			}
		case FAVORITE_STYLE_3:
			return {
				...state,
				favoriteStyle3: action.payload,
			}
		case FAVORITE_CHART_STYLE_3:
			return {
				...state,
				favoriteChartStyle3: action.payload,
			}
		case FAVORITE_LOADING_STYLE_3:
			return {
				...state,
				favoriteLoadingStyle3: action.payload,
			}
		case FAVORITE_0:
			return {
				...state,
				favorite0: action.payload,
			}
		case FAVORITE_1:
			return {
				...state,
				favorite1: action.payload,
			}
		case FAVORITE_2:
			return {
				...state,
				favorite2: action.payload,
			}
		case FAVORITE_3:
			return {
				...state,
				favorite3: action.payload,
			}
		case FAVORITES_ALERT_STYLE:
			return {
				...state,
				favoritesAlertStyle: action.payload,
			}
		case FETCHED_FAVORITES:
			return {
				...state,
				fetchedFavorites: action.payload,
			}
		case COINS:
			return {
				...state,
				coins: action.payload,
			}
		case FAVORITES_LIST_BUTTON_STYLE:
			return {
				...state,
				favoritesListButtonStyle: action.payload,
			}
		case SELECTED_FAVORITE:
			return {
				...state,
				selectedFavorite: action.payload,
			}
		case FAVORITE_REMOVE_ICON_STYLE:
			return {
				...state,
				favoriteRemoveIconStyle: action.payload,
			}
		case FAVORITE_LIST_START:
			return {
				...state,
				favoriteListStart: action.payload,
			}
		case FAVORITE_LIST_END:
			return {
				...state,
				favoriteListEnd: action.payload,
			}
		case COINS_ALL:
			return {
				...state,
				coinsAll: action.payload,
			}
		case FAVORITE_BACK_BUTTON_STYLE:
			return {
				...state,
				favoriteBackButtonStyle: action.payload,
			}
		case FAVORITE_NEXT_BUTTON_STYLE:
			return {
				...state,
				favoriteNextButtonStyle: action.payload,
			}
		case BITCOIN_GRAPH_DATA:
			return {
				...state,
				bitcoinGraphData: action.payload,
			}
		case FAVORITES_GRAPH_DATA:
			return {
				...state,
				favoritesGraphData: action.payload,
			}
		case FETCHED_FAVORITES_GRAPH_DATA:
			return {
				...state,
				fetchedFavoritesGraphData: action.payload,
			}
		case TRENDING_DATA:
			return {
				...state,
				trendingData: action.payload,
			}
		case TRENDING_LOADING_STYLE:
			return {
				...state,
				trendingLoadingStyle: action.payload,
			}
		case TRENDING_LIST_STYLE:
			return {
				...state,
				trendingListStyle: action.payload,
			}
		case CHANGES_DATA:
			return {
				...state,
				changesData: action.payload,
			}
		case CHANGES_LOADING_STYLE:
			return {
				...state,
				changesLoadingStyle: action.payload,
			}
		case CHANGES_LIST_STYLE:
			return {
				...state,
				changesListStyle: action.payload,
			}
		case PRICES_DATA:
			return {
				...state,
				pricesData: action.payload,
			}
		case NEWS_DATA:
			return {
				...state,
				newsData: action.payload,
			}
		case FETCHED_NEWS_DATA:
			return {
				...state,
				fetchedNewsData: action.payload,
			}
	}
};

export default createStore(rootReducer, applyMiddleware(thunk));
