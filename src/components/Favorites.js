import { useEffect } from "react";
import { connect } from "react-redux";
import {
	favoriteLoadingStyleAction,
	favoriteStyleAction,
	favoriteChartStyleAction,
	fetchFavoritesAction,
} from "../redux/actions";

const Favorites = ({
	favorite1,
	favorite2,
	favorite3,
	favorite4,
	favoriteStyle,
	favoriteChartStyle,
	isLoggedIn,
	connected,
	favoriteLoadingStyleAction,
	favoriteLoadingStyle,
	favoriteStyleAction,
    favoriteChartStyleAction,
    fetchFavoritesAction,
    favorites,
    userId,
}) => {
	useEffect(() => {
		if (isLoggedIn === true && connected === true) {
			//set loader and favoritestyle
			//to display none and fetch favorites + show chart
			favoriteLoadingStyleAction("displayNone");
			favoriteStyleAction("displayNone");
			favoriteChartStyleAction("displayInline");
			fetchFavoritesAction(userId);
		}
		if (isLoggedIn === true && connected === false) {
			//show loader on favorites button while connecting
			//to server once logged in
			//hide all other favorites styles
			favoriteLoadingStyleAction("favoriteLoading");
			favoriteStyleAction("displayNone");
			favoriteChartStyleAction("displayNone");
		}
		if (isLoggedIn === false) {
			//hide everything except favoritestyle
			favoriteStyleAction("displayInline");
			favoriteLoadingStyleAction("displayNone");
			favoriteChartStyleAction("displayNone");
        }
        if (isLoggedIn === false && connected === false) {
			//hide everything except favoritestyle
			favoriteStyleAction("displayNone");
			favoriteLoadingStyleAction("displayNone");
			favoriteChartStyleAction("displayInline");
        }
    }, [isLoggedIn, connected]);

    console.log(connected);
    

	return (
		<div className="row gx-0">
			<div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 favorite">
				<div className={favoriteStyle}>
					<span className="favoriteText">Add Favorite</span>
					<br />
					<i className="bi bi-plus-circle favoriteIcon"></i>
				</div>
				<div className={favoriteChartStyle}>
					{favorites[0]}
					Favorite 1
				</div>
				<div className={favoriteLoadingStyle}>
					<div className="spinner-border text-primary" role="status"></div>
				</div>
			</div>
			<div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 favorite">
				<div className={favoriteStyle}>
					<span className="favoriteText">Add Favorite</span>
					<br />
					<i className="bi bi-plus-circle favoriteIcon"></i>
				</div>
				<div className={favoriteChartStyle}>{favorite2}</div>
			</div>
			<div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 favorite">
				<div className={favoriteStyle}>
					<span className="favoriteText">Add Favorite</span>
					<br />
					<i className="bi bi-plus-circle favoriteIcon"></i>
				</div>
				<div className={favoriteChartStyle}>{favorite3}</div>
			</div>
			<div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 favorite">
				<div className={favoriteStyle}>
					<span className="favoriteText">Add Favorite</span>
					<br />
					<i className="bi bi-plus-circle favoriteIcon"></i>
				</div>
				<div className={favoriteChartStyle}>{favorite4}</div>
			</div>
		</div>
	);
};
const mapStateToProps = (state) => {
	return {
		favorite1: state.favorite1,
		favorite2: state.favorite2,
		favorite3: state.favorite3,
		favorite4: state.favorite4,
		favoriteStyle: state.favoriteStyle,
		favoriteChartStyle: state.favoriteChartStyle,
		isLoggedIn: state.isLoggedIn,
		connected: state.connected,
        favoriteLoadingStyle: state.favoriteLoadingStyle,
        favorites: state.favorites,
        userId: state.userId,
	};
};

const mapDispatchToProps = {
	favoriteLoadingStyleAction: favoriteLoadingStyleAction,
	favoriteStyleAction: favoriteStyleAction,
    favoriteChartStyleAction: favoriteChartStyleAction,
    fetchFavoritesAction: fetchFavoritesAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
