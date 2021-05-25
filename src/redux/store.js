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
	favorites: ([]),
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
	favorite0: "col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 favorite0",
	favorite1: "col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 favorite",
	favorite2: "col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 favorite",
	favorite3: "col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 favorite",
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
	}
};

export default createStore(rootReducer, applyMiddleware(thunk));
