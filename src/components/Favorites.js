import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Line, Chart } from "react-chartjs-2";
import {
	fetchFavoritesAction,
	favoriteStyleAction0,
	favoriteChartStyleAction0,
	favoriteLoadingStyleAction0,
	favoriteStyleAction1,
	favoriteChartStyleAction1,
	favoriteLoadingStyleAction1,
	favoriteStyleAction2,
	favoriteChartStyleAction2,
	favoriteLoadingStyleAction2,
	favoriteStyleAction3,
	favoriteChartStyleAction3,
	favoriteLoadingStyleAction3,
} from "../redux/actions";

const Favorites = ({
	isLoggedIn,
	connected,
    fetchFavoritesAction,
    favorites,
	userId,
	favoriteStyle0,
	favoriteChartStyle0,
	favoriteLoadingStyle0,
	favoriteStyle1,
	favoriteChartStyle1,
	favoriteLoadingStyle1,
	favoriteStyle2,
	favoriteChartStyle2,
	favoriteLoadingStyle2,
	favoriteStyle3,
	favoriteChartStyle3,
	favoriteLoadingStyle3,
	favoriteStyleAction0,
	favoriteChartStyleAction0,
	favoriteLoadingStyleAction0,
	favoriteStyleAction1,
	favoriteChartStyleAction1,
	favoriteLoadingStyleAction1,
	favoriteStyleAction2,
	favoriteChartStyleAction2,
	favoriteLoadingStyleAction2,
	favoriteStyleAction3,
	favoriteChartStyleAction3,
	favoriteLoadingStyleAction3,
	favorite0,
	favorite1,
	favorite2,
	favorite3,
}) => {
	Chart.defaults.scale.grid.display = false;
	Chart.defaults.scale.grid.borderWidth = 0;
	// Chart.defaults.scale.display = false;
	Chart.defaults.plugins.legend.display = false;
	
	useEffect(() => {
		if (isLoggedIn === true && connected === true) {
			//set loader and favoritestyle
			//to display none and fetch favorites + show chart
			fetchFavoritesAction(userId);
			if (favorites[0] === "") {
				favoriteStyleAction0("displayInline");
				favoriteChartStyleAction0("displayNone");
				favoriteLoadingStyleAction0("displayNone");
			}
			if (favorites[0] !== "") {
				favoriteStyleAction0("displayNone");
				favoriteChartStyleAction0("displayInline");
				favoriteLoadingStyleAction0("displayNone");
			}
			if (favorites[1] === "") {
				favoriteStyleAction1("displayInline");
				favoriteChartStyleAction1("displayNone");
				favoriteLoadingStyleAction1("displayNone");
			}
			if (favorites[1] !== "") {
				favoriteStyleAction1("displayNone");
				favoriteChartStyleAction1("displayInline");
				favoriteLoadingStyleAction1("displayNone");
			}
			if (favorites[2] === "") {
				favoriteStyleAction2("displayInline");
				favoriteChartStyleAction2("displayNone");
				favoriteLoadingStyleAction2("displayNone");
			}
			if (favorites[2] !== "") {
				favoriteStyleAction2("displayNone");
				favoriteChartStyleAction2("displayInline");
				favoriteLoadingStyleAction2("displayNone");
			}
			if (favorites[3] === "") {
				favoriteStyleAction3("displayInline");
				favoriteChartStyleAction3("displayNone");
				favoriteLoadingStyleAction3("displayNone");
			}
			if (favorites[3] !== "") {
				favoriteStyleAction3("displayNone");
				favoriteChartStyleAction3("displayInline");
				favoriteLoadingStyleAction3("displayNone");
			}
		}
		if (isLoggedIn === true && connected === false) {
			//show loader on favorites button while connecting
			//to server once logged in
			//hide all other favorites styles
			favoriteStyleAction0("displayNone");
			favoriteChartStyleAction0("displayNone");
			favoriteLoadingStyleAction0("favoriteLoading");
			favoriteStyleAction1("displayNone");
			favoriteChartStyleAction1("displayNone");
			favoriteLoadingStyleAction1("favoriteLoading");
			favoriteStyleAction2("displayNone");
			favoriteChartStyleAction2("displayNone");
			favoriteLoadingStyleAction2("favoriteLoading");
			favoriteStyleAction3("displayNone");
			favoriteChartStyleAction3("displayNone");
			favoriteLoadingStyleAction3("favoriteLoading");
		}
		if (isLoggedIn === false && connected === true) {
			favoriteStyleAction0("displayInline");
			favoriteChartStyleAction0("displayNone");
			favoriteLoadingStyleAction0("displayNone");
			favoriteStyleAction1("displayInline");
			favoriteChartStyleAction1("displayNone");
			favoriteLoadingStyleAction1("displayNone");
			favoriteStyleAction2("displayInline");
			favoriteChartStyleAction2("displayNone");
			favoriteLoadingStyleAction2("displayNone");
			favoriteStyleAction3("displayInline");
			favoriteChartStyleAction3("displayNone");
			favoriteLoadingStyleAction3("displayNone");
        }
        if (isLoggedIn === false && connected === false) {
			favoriteStyleAction0("displayNone");
			favoriteChartStyleAction0("displayNone");
			favoriteLoadingStyleAction0("favoriteLoading");
			favoriteStyleAction1("displayNone");
			favoriteChartStyleAction1("displayNone");
			favoriteLoadingStyleAction1("favoriteLoading");
			favoriteStyleAction2("displayNone");
			favoriteChartStyleAction2("displayNone");
			favoriteLoadingStyleAction2("favoriteLoading");
			favoriteStyleAction3("displayNone");
			favoriteChartStyleAction3("displayNone");
			favoriteLoadingStyleAction3("favoriteLoading");
        }
	}, [isLoggedIn, connected]);
	
	let favorite1Data = (canvas) => {
		const ctx = canvas.getContext("2d");
		const gradient = ctx.createLinearGradient(0, 0, 400, 0);
		gradient.addColorStop(0, "rgba(51, 67, 117, 1)");
		gradient.addColorStop(1, "rgba(252, 167, 44, 1)");
		var d = new Date();
		var weekday = new Array(14);
		weekday[-6] = "Monday";
		weekday[-5] = "Tuesday";
		weekday[-4] = "Wednesday";
		weekday[-3] = "Thursday";
		weekday[-2] = "Friday";
		weekday[-1] = "Saturday";
		weekday[0] = "Sunday";
		weekday[1] = "Monday";
		weekday[2] = "Tuesday";
		weekday[3] = "Wednesday";
		weekday[4] = "Thursday";
		weekday[5] = "Friday";
		weekday[6] = "Saturday";

		return {
			labels: [
				weekday[d.getDay() - 6],
				weekday[d.getDay() - 5],
				weekday[d.getDay() - 4],
				weekday[d.getDay() - 3],
				weekday[d.getDay() - 2],
				weekday[d.getDay() - 1],
				weekday[d.getDay()], //current day
			],
			datasets: [
				{
					fill: "start",
					data: [7040, 10000, 6999, 6486, 8043, 7550, 8842],
					backgroundColor: gradient,
					borderColor: ["#5091ed"],
					borderWidth: 0,
				},
			],
		};
	};

	return (
		<div className="row gx-0">
			<div className={favorite0}>
				<div className={favoriteStyle0}>
					<span className="favoriteText">Add Favorite</span>
					<br />
					<i className="bi bi-plus-circle favoriteIcon"></i>
				</div>
				<div className="favoriteChartStyle0 row">
					<div className="col-12">
						<span className="favoritePrice">
						<b>$9992</b>
						</span>
						<span className="priceUp favoritePercentage"><b>7%</b></span>
						<i className="bi bi-caret-up-fill priceUp favoritePercentageIcon"></i>
						<i className="bi bi-dash-circle favoriteChangeIcon"></i>
					</div>
					<div className="col-12 favoriteCoinContainer">
						<p className="favoriteCoin">
							{favorites[0]} price
						</p>
					</div>
					<div className="col-12">
						<div className="favoriteGraph" style={{ width: null, height: null }}>
							<Line
								data={favorite1Data}
								options={{
									responsive: true,
									maintainAspectRatio: true,
									aspectRatio: 2.5,
									elements: {
										point: {
											radius: 0,
										},
									},
									scales: {
										y:
										{
											display: false,
											ticks: {
												autoSkip: true,
												maxTicksLimit: 10,
												beginAtZero: true,
												display: false,
											},
											gridLines: {
												display: false,
											},
										},
										x:
										{
											display: false,
											ticks: {
												autoSkip: true,
												maxTicksLimit: 10,
												beginAtZero: true,
												display: false,
											},
											gridLines: {
												display: false,
											},
										},
									},
								}}
							/>
						</div>
					</div>
				</div>
				<div className={favoriteLoadingStyle0}>
					<div className="spinner-border text-primary" role="status"></div>
				</div>
			</div>
			<div className={favorite1}>
				<div className={favoriteStyle1}>
					<span className="favoriteText">Add Favorite</span>
					<br />
					<i className="bi bi-plus-circle favoriteIcon"></i>
				</div>
				<div className={favoriteChartStyle1}>
					{favorites[1]}
				</div>
				<div className={favoriteLoadingStyle1}>
					<div className="spinner-border text-primary" role="status"></div>
				</div>
			</div>
			<div className={favorite2}>
				<div className={favoriteStyle2}>
					<span className="favoriteText">Add Favorite</span>
					<br />
					<i className="bi bi-plus-circle favoriteIcon"></i>
				</div>
				<div className={favoriteChartStyle2}>
					{favorites[2]}
				</div>
				<div className={favoriteLoadingStyle2}>
					<div className="spinner-border text-primary" role="status"></div>
				</div>
			</div>
			<div className={favorite3}>
				<div className={favoriteStyle3}>
					<span className="favoriteText">Add Favorite</span>
					<br />
					<i className="bi bi-plus-circle favoriteIcon"></i>
				</div>
				<div className={favoriteChartStyle3}>
					{favorites[3]}
				</div>
				<div className={favoriteLoadingStyle3}>
					<div className="spinner-border text-primary" role="status"></div>
				</div>
			</div>
		</div>
	);
};
const mapStateToProps = (state) => {
	return {
		isLoggedIn: state.isLoggedIn,
		connected: state.connected,
        favorites: state.favorites,
		userId: state.userId,
		favoriteStyle0: state.favoriteStyle0,
		favoriteChartStyle0: state.favoriteChartStyle0,
		favoriteLoadingStyle0: state.favoriteLoadingStyle0,
		favoriteStyle1: state.favoriteStyle1,
		favoriteChartStyle1: state.favoriteChartStyle1,
		favoriteLoadingStyle1: state.favoriteLoadingStyle1,
		favoriteStyle2: state.favoriteStyle2,
		favoriteChartStyle2: state.favoriteChartStyle2,
		favoriteLoadingStyle2: state.favoriteLoadingStyle2,
		favoriteStyle3: state.favoriteStyle3,
		favoriteChartStyle3: state.favoriteChartStyle3,
		favoriteLoadingStyle3: state.favoriteLoadingStyle3,
		favorite0: state.favorite0,
		favorite1: state.favorite1,
		favorite2: state.favorite2,
		favorite3: state.favorite3,
	};
};

const mapDispatchToProps = {
	fetchFavoritesAction: fetchFavoritesAction,
	favoriteStyleAction0: favoriteStyleAction0,
	favoriteChartStyleAction0: favoriteChartStyleAction0,
	favoriteLoadingStyleAction0: favoriteLoadingStyleAction0,
	favoriteStyleAction1: favoriteStyleAction1,
	favoriteChartStyleAction1: favoriteChartStyleAction1,
	favoriteLoadingStyleAction1:favoriteLoadingStyleAction1,
	favoriteStyleAction2:favoriteStyleAction2,
	favoriteChartStyleAction2:favoriteChartStyleAction2,
	favoriteLoadingStyleAction2:favoriteLoadingStyleAction2,
	favoriteStyleAction3:favoriteStyleAction3,
	favoriteChartStyleAction3:favoriteChartStyleAction3,
	favoriteLoadingStyleAction3:favoriteLoadingStyleAction3,
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
