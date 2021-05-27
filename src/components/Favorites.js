import { useEffect } from "react";
import { connect } from "react-redux";
import { Line, Chart } from "react-chartjs-2";
import CoinGeko from "../API/CoinGecko";
import API from "../API/API";
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
	favoritesAlertStyleAction,
	favoritesListButtonStyleAction,
	coinsAction,
	selectedFavoriteAction,
	favoriteListStartAction,
	favoriteListEndAction,
	coinsAllAction,
	favoriteBackButtonStyleAction,
	favoriteNextButtonStyleAction,
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
	favoritesAlertStyleAction,
	favoritesAlertStyle,
	fetchedFavorites,
	favoritesListButtonStyleAction,
	favoritesListButtonStyle,
	coinsAction,
	coins,
	selectedFavoriteAction,
	selectedFavorite,
	favoriteRemoveIconStyle,
	favoriteListStartAction,
	favoriteListEndAction,
	coinsAllAction,
	favoriteBackButtonStyleAction,
	favoriteNextButtonStyleAction,
	favoriteListStart,
	favoriteListEnd,
	coinsAll,
	favoriteBackButtonStyle,
	favoriteNextButtonStyle,
	favoritesGraphData,
}) => {
	Chart.defaults.scale.grid.display = false;
	Chart.defaults.scale.grid.borderWidth = 0;
	Chart.defaults.plugins.legend.display = false;

	function NameList() {  
		if (coins.length === 0) {
			CoinGeko.get("/coins/list?include_platform=false")
			.then(function(response) {
				let coinsList = [];
				let res = response.data;
				coinsAllAction(res);
				for (let i = 0; i < 100; i++) {
					coinsList.push(res.[i].id);
				}
				coinsAction(coinsList);
				favoritesListButtonStyleAction("row text-center");
			})
		}
	}

	useEffect(() => {
		if (coins.length > 0 && coinsAll.length > 0) {
			let coinsList = [];
			
			for (let i = favoriteListStart; i < favoriteListEnd; i++) {
				coinsList.push(coinsAll.[i].id);
			}

			coinsAction(coinsList);
		}
		if (favoriteListStart === 0) {
			favoriteBackButtonStyleAction("displayNone");
		}
		if (favoriteListStart === 100) {
			favoriteBackButtonStyleAction("favoritesListBack");
		}
		if (favoriteListEnd === Math.round(coinsAll.length/100)*100) {
			favoriteNextButtonStyleAction("displayNone");
		}
		if (favoriteListEnd !== Math.round(coinsAll.length/100)*100) {
			favoriteNextButtonStyleAction("favoritesListNext");
		}
	}, [favoriteListStart, favoriteListEnd])

	const NamesList = () => {
		if (coins.length > 0) {
			const listItems = coins.map((coin, i) =>  
				<div key={i} className="row text-center favoritesListItem">
					<div className="col-12">
						<span className="favoritesListName" onClick={() => AddFavorite(i)}>{coin}</span>
					</div>
				</div>
			);
			return (  
				<div>
					{listItems}  
				</div>  
			);    
		} else {
			return (
				<div className="coinsListLoader">
					<div className="spinner-border text-primary" role="status">
					</div>
				</div>
			);
		}
	};

	function OnNextClick() {
		favoriteListStartAction(favoriteListStart + 100);
		favoriteListEndAction(favoriteListEnd + 100);
	}

	function OnBackClick() {
		favoriteListStartAction(favoriteListStart - 100);
		favoriteListEndAction(favoriteListEnd - 100);
	}

	function AddFavorite(i) {
		let payload = {
			[selectedFavorite]: `${coins[i]}`,
		};
		API.patch(`/favorites/${userId}/`, payload)
			.then(function (response) {
				fetchFavoritesAction(userId, false);
				CloseCoinList();
			})
	}

	function ShowCoinList0() {
		favoritesAlertStyleAction("alert alert-light alert-dismissible fade show favoritesAlert");
		NameList();
		selectedFavoriteAction("favorite1");
	}

	function ShowCoinList1() {
		favoritesAlertStyleAction("alert alert-light alert-dismissible fade show favoritesAlert");
		NameList();
		selectedFavoriteAction("favorite2");
	}

	function ShowCoinList2() {
		favoritesAlertStyleAction("alert alert-light alert-dismissible fade show favoritesAlert");
		NameList();
		selectedFavoriteAction("favorite3");
	}

	function ShowCoinList3() {
		favoritesAlertStyleAction("alert alert-light alert-dismissible fade show favoritesAlert");
		NameList();
		selectedFavoriteAction("favorite4");
	}

	function CloseCoinList() {
		favoritesAlertStyleAction("displayNone");
	}

	function RemoveFavorite0() {
		let payload = {
			"favorite1": "",
		};

		API.patch(`/favorites/${userId}/`, payload)
			.then(function (response) {
				fetchFavoritesAction(userId, false);
				favoriteStyleAction0("displayInline");
				favoriteChartStyleAction0("displayNone");
				favoriteLoadingStyleAction0("displayNone");
				favorite0Action("col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 favorite");
			})
	}

	function RemoveFavorite1() {
		let payload = {
			"favorite2": "",
		};

		API.patch(`/favorites/${userId}/`, payload)
			.then(function (response) {
				fetchFavoritesAction(userId, false);
				favoriteStyleAction1("displayInline");
				favoriteChartStyleAction1("displayNone");
				favoriteLoadingStyleAction1("displayNone");
				favorite1Action("col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 favorite");
			})
	}

	function RemoveFavorite2() {
		let payload = {
			"favorite3": "",
		};

		API.patch(`/favorites/${userId}/`, payload)
			.then(function (response) {
				fetchFavoritesAction(userId, false);
				favoriteStyleAction2("displayInline");
				favoriteChartStyleAction2("displayNone");
				favoriteLoadingStyleAction2("displayNone");
				favorite2Action("col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 favorite");
			})
	}

	function RemoveFavorite3() {
		let payload = {
			"favorite4": "",
		};

		API.patch(`/favorites/${userId}/`, payload)
			.then(function (response) {
				fetchFavoritesAction(userId, false);
				favoriteStyleAction3("displayInline");
				favoriteChartStyleAction3("displayNone");
				favoriteLoadingStyleAction3("displayNone");
				favorite3Action("col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 favorite");
			})
	}
	
	useEffect(() => {
		if (isLoggedIn === true && connected === true) {
			fetchFavoritesAction(userId, true);
			if (fetchedFavorites === true) {
				//get CoinGecko data and set chart data
				if (favorites[0] === "") {
					favoriteStyleAction0("displayInline");
					favoriteChartStyleAction0("displayNone");
					favoriteLoadingStyleAction0("displayNone");
					favorite0Action("col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 favorite");
				}
				if (favorites[0] !== "") {
					favoriteStyleAction0("displayNone");
					favoriteChartStyleAction0("favoriteChartStyle0 row");
					favoriteLoadingStyleAction0("displayNone");
					favorite0Action("col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 favorite0");
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
		if (isLoggedIn === false) {
			favoriteStyleAction0("displayNone");
			favoriteChartStyleAction0("favoriteChartStyle0 row");
			favoriteLoadingStyleAction0("displayNone");
			favorite0Action("col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 favorite0");
			favoriteStyleAction1("displayNone");
			favoriteChartStyleAction1("favoriteChartStyle1 row");
			favoriteLoadingStyleAction1("displayNone");
			favorite1Action("col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 favorite1");
			favoriteStyleAction2("displayNone");
			favoriteChartStyleAction2("favoriteChartStyle2 row");
			favoriteLoadingStyleAction2("displayNone");
			favorite2Action("col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 favorite2");
			favoriteStyleAction3("displayNone");
			favoriteChartStyleAction3("favoriteChartStyle3 row");
			favoriteLoadingStyleAction3("displayNone");
			favorite3Action("col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 favorite3");
        }
	}, [isLoggedIn, connected, fetchedFavorites]);
	
	let favorite0Data = (canvas) => {
		const ctx = canvas.getContext("2d");
		const gradient = ctx.createLinearGradient(0, 0, 400, 0);
		gradient.addColorStop(0, "rgba(51, 67, 117, 1)");
		gradient.addColorStop(1, "rgba(252, 167, 44, 1)");

		const day0 = favoritesGraphData[0].[0];
		const day1 = favoritesGraphData[0].[1];
		const day2 = favoritesGraphData[0].[2];
		const day3 = favoritesGraphData[0].[3];
		const day4 = favoritesGraphData[0].[4];
		const day5 = favoritesGraphData[0].[5];
		const today = favoritesGraphData[0].[6];

		let data = [day0, day1, day2, day3, day4, day5, today];

		return {
			labels: [
				0,
				1,
				2,
				3,
				4,
				5,
				6
			],
			datasets: [
				{
					fill: "start",
					data: data,
					backgroundColor: gradient,
					borderColor: ["#5091ed"],
					borderWidth: 0,
				},
			],
		};
	};

	let favorite1Data = (canvas) => {
		const ctx = canvas.getContext("2d");
		const gradient = ctx.createLinearGradient(0, 0, 400, 0);
		gradient.addColorStop(0, "#7adbe8");
		gradient.addColorStop(1, "#1FC295");

		const day0 = favoritesGraphData[1].[0];
		const day1 = favoritesGraphData[1].[1];
		const day2 = favoritesGraphData[1].[2];
		const day3 = favoritesGraphData[1].[3];
		const day4 = favoritesGraphData[1].[4];
		const day5 = favoritesGraphData[1].[5];
		const today = favoritesGraphData[1].[6];

		let data = [day0, day1, day2, day3, day4, day5, today];

		return {
			labels: [
				0,
				1,
				2,
				3,
				4,
				5,
				6
			],
			datasets: [
				{
					fill: "start",
					data: data,
					backgroundColor: gradient,
					borderColor: ["#5091ed"],
					borderWidth: 0,
				},
			],
		};
	};

	let favorite2Data = (canvas) => {
		const ctx = canvas.getContext("2d");
		const gradient = ctx.createLinearGradient(0, 0, 400, 0);
		gradient.addColorStop(0, "#ED4952");
		gradient.addColorStop(1, "#e59295");

		const day0 = favoritesGraphData[2].[0];
		const day1 = favoritesGraphData[2].[1];
		const day2 = favoritesGraphData[2].[2];
		const day3 = favoritesGraphData[2].[3];
		const day4 = favoritesGraphData[2].[4];
		const day5 = favoritesGraphData[2].[5];
		const today = favoritesGraphData[2].[6];

		let data = [day0, day1, day2, day3, day4, day5, today];

		return {
			labels: [
				0,
				1,
				2,
				3,
				4,
				5,
				6
			],
			datasets: [
				{
					fill: "start",
					data: data,
					backgroundColor: gradient,
					borderColor: ["#5091ed"],
					borderWidth: 0,
				},
			],
		};
	};

	let favorite3Data = (canvas) => {
		const ctx = canvas.getContext("2d");
		const gradient = ctx.createLinearGradient(0, 0, 400, 0);
		gradient.addColorStop(0, "#d973df");
		gradient.addColorStop(1, "#3c37d8");

		const day0 = favoritesGraphData[3].[0];
		const day1 = favoritesGraphData[3].[1];
		const day2 = favoritesGraphData[3].[2];
		const day3 = favoritesGraphData[3].[3];
		const day4 = favoritesGraphData[3].[4];
		const day5 = favoritesGraphData[3].[5];
		const today = favoritesGraphData[3].[6];

		let data = [day0, day1, day2, day3, day4, day5, today];

		return {
			labels: [
				0,
				1,
				2,
				3,
				4,
				5,
				6
			],
			datasets: [
				{
					fill: "start",
					data: data,
					backgroundColor: gradient,
					borderColor: ["#5091ed"],
					borderWidth: 0,
				},
			],
		};
	};

	return (
		<div className="row gx-0">
			<div className={favoritesAlertStyle} role="alert">
				<button onClick={CloseCoinList} type="button" className="btn-close favoritesListClose" aria-label="Close"></button>
				<div className="favoritesAlertList">
					<NamesList />
					<div className={favoritesListButtonStyle}>
						<div className="col-6">
							<button className={favoriteBackButtonStyle} onClick={OnBackClick}>
								Back
							</button>
						</div>
						<div className="col-6">
							<button className={favoriteNextButtonStyle} onClick={OnNextClick}>
								Next
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className={favorite0}>
				<div className={favoriteStyle0} onClick={ShowCoinList0}>
					<span className="favoriteText">Add Favorite</span>
					<br />
					<i className="bi bi-plus-circle favoriteIcon"></i>
				</div>
				<div className={favoriteChartStyle0}>
					<div className="col-12">
						<span className="favoritePrice">
							<b>
								${favoritesGraphData[0].[7]}
							</b>
						</span>
						{
							favoritesGraphData[0].[8] > 0 ? 
							<span className="priceUp favoritePercentage">
								<b>
									{Math.round(favoritesGraphData[0].[8])}%
								</b>
							</span>
							:
							<span className="priceDown favoritePercentage">
								<b>
									{Math.round(favoritesGraphData[0].[8])}%
								</b>
							</span>
						}
						{
							favoritesGraphData[0].[8] > 0 ? 
							<i className="bi bi-caret-up-fill priceUp favoritePercentageIcon"></i>
							:
							<i className="bi bi-caret-down-fill priceDown favoritePercentageIcon"></i>
						}
						<i className={favoriteRemoveIconStyle} onClick={RemoveFavorite0}></i>
					</div>
					<div className="col-12 favoriteCoinContainer">
						<p className="favoriteCoin">
							{favorites[0]} price
						</p>
					</div>
					<div className="col-12">
						<div className="favoriteGraph" style={{ width: null, height: null }}>
							<Line
								data={favorite0Data}
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
				<div className={favoriteStyle1} onClick={ShowCoinList1}>
					<span className="favoriteText">Add Favorite</span>
					<br />
					<i className="bi bi-plus-circle favoriteIcon"></i>
				</div>
				<div className={favoriteChartStyle1}>
					<div className="col-12">
						<span className="favoritePrice">
							<b>
								${favoritesGraphData[1].[7]}
							</b>
						</span>
						{
							favoritesGraphData[1].[8] > 0 ? 
							<span className="priceUp favoritePercentage">
								<b>
									{Math.round(favoritesGraphData[1].[8])}%
								</b>
							</span>
							:
							<span className="priceDown favoritePercentage">
								<b>
									{Math.round(favoritesGraphData[1].[8])}%
								</b>
							</span>
						}
						{
							favoritesGraphData[1].[8] > 0 ? 
							<i className="bi bi-caret-up-fill priceUp favoritePercentageIcon"></i>
							:
							<i className="bi bi-caret-down-fill priceDown favoritePercentageIcon"></i>
						}
						<i className={favoriteRemoveIconStyle} onClick={RemoveFavorite1}></i>
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
				<div className={favoriteStyle2} onClick={ShowCoinList2}>
					<span className="favoriteText">Add Favorite</span>
					<br />
					<i className="bi bi-plus-circle favoriteIcon"></i>
				</div>
				<div className={favoriteChartStyle2}>
					<div className="col-12">
						<span className="favoritePrice">
							<b>
								${favoritesGraphData[2].[7]}
							</b>
						</span>
						{
							favoritesGraphData[2].[8] > 0 ? 
							<span className="priceUp favoritePercentage">
								<b>
									{Math.round(favoritesGraphData[2].[8])}%
								</b>
							</span>
							:
							<span className="priceDown favoritePercentage">
								<b>
									{Math.round(favoritesGraphData[2].[8])}%
								</b>
							</span>
						}
						{
							favoritesGraphData[2].[8] > 0 ? 
							<i className="bi bi-caret-up-fill priceUp favoritePercentageIcon"></i>
							:
							<i className="bi bi-caret-down-fill priceDown favoritePercentageIcon"></i>
						}
						<i className={favoriteRemoveIconStyle} onClick={RemoveFavorite2}></i>
					</div>
					<div className="col-12 favoriteCoinContainer">
						<p className="favoriteCoin">
							{favorites[2]} price
						</p>
					</div>
					<div className="col-12">
						<div className="favoriteGraph" style={{ width: null, height: null }}>
							<Line
								data={favorite2Data}
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
				<div className={favoriteStyle3} onClick={ShowCoinList3}>
					<span className="favoriteText">Add Favorite</span>
					<br />
					<i className="bi bi-plus-circle favoriteIcon"></i>
				</div>
				<div className={favoriteChartStyle3}>
					<div className="col-12">
						<span className="favoritePrice">
							<b>
								${favoritesGraphData[3].[7]}
							</b>
						</span>
						{
							favoritesGraphData[3].[8] > 0 ? 
							<span className="priceUp favoritePercentage">
								<b>
									{Math.round(favoritesGraphData[3].[8])}%
								</b>
							</span>
							:
							<span className="priceDown favoritePercentage">
								<b>
									{Math.round(favoritesGraphData[3].[8])}%
								</b>
							</span>
						}
						{
							favoritesGraphData[3].[8] > 0 ? 
							<i className="bi bi-caret-up-fill priceUp favoritePercentageIcon"></i>
							:
							<i className="bi bi-caret-down-fill priceDown favoritePercentageIcon"></i>
						}
						<i className={favoriteRemoveIconStyle} onClick={RemoveFavorite3}></i>
					</div>
					<div className="col-12 favoriteCoinContainer">
						<p className="favoriteCoin">
							{favorites[3]} price
						</p>
					</div>
					<div className="col-12">
						<div className="favoriteGraph" style={{ width: null, height: null }}>
							<Line
								data={favorite3Data}
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
		favoritesAlertStyle: state.favoritesAlertStyle,
		fetchedFavorites: state.fetchedFavorites,
		coins: state.coins,
		favoritesListButtonStyle: state.favoritesListButtonStyle,
		selectedFavorite: state.selectedFavorite,
		favoriteRemoveIconStyle: state.favoriteRemoveIconStyle,
		favoriteListStart: state.favoriteListStart,
		favoriteListEnd: state.favoriteListEnd,
		coinsAll: state.coinsAll,
		favoriteBackButtonStyle: state.favoriteBackButtonStyle,
		favoriteNextButtonStyle: state.favoriteNextButtonStyle,
		favoritesGraphData: state.favoritesGraphData,
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
	favoritesAlertStyleAction: favoritesAlertStyleAction,
	coinsAction: coinsAction,
	favoritesListButtonStyleAction: favoritesListButtonStyleAction,
	selectedFavoriteAction: selectedFavoriteAction,
	favoriteListStartAction: favoriteListStartAction,
	favoriteListEndAction: favoriteListEndAction,
	coinsAllAction: coinsAllAction,
	favoriteBackButtonStyleAction: favoriteBackButtonStyleAction,
	favoriteNextButtonStyleAction: favoriteNextButtonStyleAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
