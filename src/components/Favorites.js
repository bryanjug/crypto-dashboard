import { useEffect } from "react";
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
	favorite0Action,
	favorite1Action,
	favorite2Action,
	favorite3Action,
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
	favorite0Action,
	favorite1Action,
	favorite2Action,
	favorite3Action,
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
				favorite0Action("col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 favorite");
			}
			if (favorites[0] !== "") {
				favoriteStyleAction0("displayInline");
				favoriteChartStyleAction0("displayNone");
				favoriteLoadingStyleAction0("displayNone");
				favorite0Action("col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 favorite");
				// favoriteStyleAction0("displayNone");
				// favoriteChartStyleAction0("favoriteChartStyle0 row");
				// favoriteLoadingStyleAction0("displayNone");
				// favorite0Action("col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 favorite0");
			}
			if (favorites[1] === "") {
				favoriteStyleAction1("displayInline");
				favoriteChartStyleAction1("displayNone");
				favoriteLoadingStyleAction1("displayNone");
				favorite1Action("col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 favorite");
			}
			if (favorites[1] !== "") {
				favoriteStyleAction1("displayNone");
				favoriteChartStyleAction1("favoriteChartStyle1 row");
				favoriteLoadingStyleAction1("displayNone");
				favorite1Action("col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 favorite1");
			}
			if (favorites[2] === "") {
				favoriteStyleAction2("displayInline");
				favoriteChartStyleAction2("displayNone");
				favoriteLoadingStyleAction2("displayNone");
				favorite2Action("col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 favorite");
			}
			if (favorites[2] !== "") {
				favoriteStyleAction2("displayNone");
				favoriteChartStyleAction2("favoriteChartStyle2 row");
				favoriteLoadingStyleAction2("displayNone");
				favorite2Action("col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 favorite2");
			}
			if (favorites[3] === "") {
				favoriteStyleAction3("displayInline");
				favoriteChartStyleAction3("displayNone");
				favoriteLoadingStyleAction3("displayNone");
				favorite3Action("col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 favorite");
			}
			if (favorites[3] !== "") {
				favoriteStyleAction3("displayNone");
				favoriteChartStyleAction3("favoriteChartStyle3 row");
				favoriteLoadingStyleAction3("displayNone");
				favorite3Action("col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 favorite3");
			}
		}
		if (isLoggedIn === true && connected === false) {
			//show loader on favorites button while connecting
			//to server once logged in
			//hide all other favorites styles
			favoriteStyleAction0("displayNone");
			favoriteChartStyleAction0("displayNone");
			favoriteLoadingStyleAction0("favoriteLoading");
			favorite0Action("col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 favorite");
			favoriteStyleAction1("displayNone");
			favoriteChartStyleAction1("displayNone");
			favoriteLoadingStyleAction1("favoriteLoading");
			favorite1Action("col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 favorite");
			favoriteStyleAction2("displayNone");
			favoriteChartStyleAction2("displayNone");
			favoriteLoadingStyleAction2("favoriteLoading");
			favorite2Action("col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 favorite");
			favoriteStyleAction3("displayNone");
			favoriteChartStyleAction3("displayNone");
			favoriteLoadingStyleAction3("favoriteLoading");
			favorite3Action("col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 favorite");
		}
		if (isLoggedIn === false && connected === true) {
			favoriteStyleAction0("displayInline");
			favoriteChartStyleAction0("displayNone");
			favoriteLoadingStyleAction0("displayNone");
			favorite0Action("col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 favorite");
			favoriteStyleAction1("displayInline");
			favoriteChartStyleAction1("displayNone");
			favoriteLoadingStyleAction1("displayNone");
			favorite1Action("col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 favorite");
			favoriteStyleAction2("displayInline");
			favoriteChartStyleAction2("displayNone");
			favoriteLoadingStyleAction2("displayNone");
			favorite2Action("col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 favorite");
			favoriteStyleAction3("displayInline");
			favoriteChartStyleAction3("displayNone");
			favoriteLoadingStyleAction3("displayNone");
			favorite3Action("col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 favorite");
        }
        if (isLoggedIn === false && connected === false) {
			favoriteStyleAction0("displayNone");
			favoriteChartStyleAction0("displayNone");
			favoriteLoadingStyleAction0("favoriteLoading");
			favorite0Action("col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 favorite");
			favoriteStyleAction1("displayNone");
			favoriteChartStyleAction1("displayNone");
			favoriteLoadingStyleAction1("favoriteLoading");
			favorite1Action("col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 favorite");
			favoriteStyleAction2("displayNone");
			favoriteChartStyleAction2("displayNone");
			favoriteLoadingStyleAction2("favoriteLoading");
			favorite2Action("col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 favorite");
			favoriteStyleAction3("displayNone");
			favoriteChartStyleAction3("displayNone");
			favoriteLoadingStyleAction3("favoriteLoading");
			favorite3Action("col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 favorite");
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

	function ShowCoinList() {

	}

	//favoriteChartStyle0 row
	return (
		<div className="row gx-0">
			<div className="alert alert-light alert-dismissible fade show favoritesAlert" role="alert">
				<button type="button" className="btn-close favoritesListClose" data-bs-dismiss="alert" aria-label="Close"></button>
				<div className="favoritesAlertList">
					<div className="row text-center favoritesListItem">
						<div className="col-6">
							<i className="bi bi-circle"></i>
							<span className="favoritesListName">Name</span>
						</div>
						<div className="col-6">
							<span className="favoritesListPrice">Price</span>
						</div>
					</div>
					<div className="row text-center favoritesListItem">
						<div className="col-6">
							<i className="bi bi-circle"></i>
							<span className="favoritesListName">Name</span>
						</div>
						<div className="col-6">
							<span className="favoritesListPrice">Price</span>
						</div>
					</div>
					<div className="row text-center favoritesListItem">
						<div className="col-6">
							<i className="bi bi-circle"></i>
							<span className="favoritesListName">Name</span>
						</div>
						<div className="col-6">
							<span className="favoritesListPrice">Price</span>
						</div>
					</div>
					<div className="row text-center favoritesListItem">
						<div className="col-6">
							<i className="bi bi-circle"></i>
							<span className="favoritesListName">Name</span>
						</div>
						<div className="col-6">
							<span className="favoritesListPrice">Price</span>
						</div>
					</div>
					<div className="row text-center favoritesListItem">
						<div className="col-6">
							<i className="bi bi-circle"></i>
							<span className="favoritesListName">Name</span>
						</div>
						<div className="col-6">
							<span className="favoritesListPrice">Price</span>
						</div>
					</div>
					<div className="row text-center favoritesListItem">
						<div className="col-6">
							<i className="bi bi-circle"></i>
							<span className="favoritesListName">Name</span>
						</div>
						<div className="col-6">
							<span className="favoritesListPrice">Price</span>
						</div>
					</div>
					<div className="row text-center favoritesListItem">
						<div className="col-6">
							<i className="bi bi-circle"></i>
							<span className="favoritesListName">Name</span>
						</div>
						<div className="col-6">
							<span className="favoritesListPrice">Price</span>
						</div>
					</div>
					<div className="row text-center favoritesListItem">
						<div className="col-6">
							<i className="bi bi-circle"></i>
							<span className="favoritesListName">Name</span>
						</div>
						<div className="col-6">
							<span className="favoritesListPrice">Price</span>
						</div>
					</div>
					<div className="row text-center favoritesListItem">
						<div className="col-6">
							<i className="bi bi-circle"></i>
							<span className="favoritesListName">Name</span>
						</div>
						<div className="col-6">
							<span className="favoritesListPrice">Price</span>
						</div>
					</div>
					<div className="row text-center favoritesListItem">
						<div className="col-6">
							<i className="bi bi-circle"></i>
							<span className="favoritesListName">Name</span>
						</div>
						<div className="col-6">
							<span className="favoritesListPrice">Price</span>
						</div>
					</div>
					<div className="row text-center favoritesListItem">
						<div className="col-6">
							<i className="bi bi-circle"></i>
							<span className="favoritesListName">Name</span>
						</div>
						<div className="col-6">
							<span className="favoritesListPrice">Price</span>
						</div>
					</div>
					<div className="row text-center favoritesListItem">
						<div className="col-6">
							<i className="bi bi-circle"></i>
							<span className="favoritesListName">Name</span>
						</div>
						<div className="col-6">
							<span className="favoritesListPrice">Price</span>
						</div>
					</div>
				</div>
			</div>
			<div className={favorite0}>
				<div className={favoriteStyle0} onClick={ShowCoinList}>
					<span className="favoriteText">Add Favorite</span>
					<br />
					<i className="bi bi-plus-circle favoriteIcon"></i>
				</div>
				<div className={favoriteChartStyle0}>
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
							{favorites[1]} price
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
							{favorites[2]} price
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
							{favorites[3]} price
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
	favorite0Action: favorite0Action,
	favorite1Action: favorite1Action,
	favorite2Action: favorite2Action,
	favorite3Action: favorite3Action,
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
