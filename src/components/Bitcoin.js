import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
	bitcoinGraphDataAction,
} from "../redux/actions";
import { Line, Chart } from "react-chartjs-2";

const Bitcoin = ({bitcoinGraphDataAction, bitcoinGraphData}) => {
	const [aspectRatio, setAspectRatio] = useState(2);
	const [gradientSize, setGradientSize] = useState(550);
	Chart.defaults.scale.grid.display = false;
    Chart.defaults.scale.grid.borderWidth = 0;

	//changes font size and height of chart
	const ResponsiveChart = () => {
		//set gradient sizes
		if (window.innerWidth >= 2137 && window.innerWidth < 2850) {
			setGradientSize(900);
		}
		if (window.innerWidth >= 2850 && window.innerWidth < 3500) {
			setGradientSize(1000);
		}
		if (window.innerWidth >= 3500 && window.innerWidth < 4275) {
			setGradientSize(1200);
		}
		if (window.innerWidth >= 4275) {
			setGradientSize(1400);
		}
		//set graph size
        if (window.innerWidth < 375) {
            Chart.defaults.font.size = 12;
            setAspectRatio(.8);
		}
        if (window.innerWidth >= 375 && window.innerWidth < 576) {
            Chart.defaults.font.size = 12;
            setAspectRatio(1);
		}
        if (window.innerWidth >= 576 && window.innerWidth < 768) {
            Chart.defaults.font.size = 12;
            setAspectRatio(1.4);
        }
        if (window.innerWidth >= 768 && window.innerWidth < 950) {
            Chart.defaults.font.size = 12;
            setAspectRatio(1.7);
        }
        if (window.innerWidth >= 950 && window.innerWidth < 1024) {
            Chart.defaults.font.size = 12;
            setAspectRatio(2.2);
        }
        if (window.innerWidth >= 1024 && window.innerWidth < 1295) {
            Chart.defaults.font.size = 12;
            setAspectRatio(2.8);
        }
        if (window.innerWidth >= 1295 && window.innerWidth < 1425) {
            Chart.defaults.font.size = 12;
            setAspectRatio(3);
        }
        if (window.innerWidth >= 1425) {
            Chart.defaults.font.size = 12;
            setAspectRatio(1.4);
        }
		if (window.innerWidth < 1781) {
            Chart.defaults.font.size = 12;
		} 
		if (window.innerWidth >= 1781 && window.innerWidth < 1900) {
            Chart.defaults.font.size = 15;
		}
		if (window.innerWidth >= 1900 && window.innerWidth < 2137) {
			Chart.defaults.font.size = 18;
		}
		if (window.innerWidth >= 2137 && window.innerWidth < 2850) {
			Chart.defaults.font.size = 20;
		}
		if (window.innerWidth >= 2850 && window.innerWidth < 4275) {
			Chart.defaults.font.size = 25;
		}
		if (window.innerWidth >= 4275) {
			Chart.defaults.font.size = 40;
        }
        window.addEventListener('resize', () => {
			//set gradient sizes
			if (window.innerWidth >= 2137 && window.innerWidth < 2850) {
				setGradientSize(900);
			}
			if (window.innerWidth >= 2850 && window.innerWidth < 3500) {
				setGradientSize(1000);
			}
			if (window.innerWidth >= 3500 && window.innerWidth < 4275) {
				setGradientSize(1200);
			}
			if (window.innerWidth >= 4275) {
				setGradientSize(1400);
			}
			//set graph size
            if (window.innerWidth < 375) {
                Chart.defaults.font.size = 12;
                setAspectRatio(.8);
            }
            if (window.innerWidth >= 375 && window.innerWidth < 576) {
                Chart.defaults.font.size = 12;
                setAspectRatio(1);
            }
            if (window.innerWidth >= 576 && window.innerWidth < 768) {
                Chart.defaults.font.size = 12;
                setAspectRatio(1.4);
            }
            if (window.innerWidth >= 768 && window.innerWidth < 950) {
                Chart.defaults.font.size = 12;
                setAspectRatio(1.7);
            }
            if (window.innerWidth >= 950 && window.innerWidth < 1024) {
                Chart.defaults.font.size = 12;
                setAspectRatio(2.2);
            }
            if (window.innerWidth >= 1024 && window.innerWidth < 1295) {
                Chart.defaults.font.size = 12;
                setAspectRatio(2.8);
            }
            if (window.innerWidth >= 1295 && window.innerWidth < 1425) {
                Chart.defaults.font.size = 12;
                setAspectRatio(3);
            }
            if (window.innerWidth >= 1425) {
                Chart.defaults.font.size = 12;
                setAspectRatio(1.4);
            }
			if (window.innerWidth < 1781) {
                Chart.defaults.font.size = 12;
			}
			if (window.innerWidth >= 1781 && window.innerWidth < 1900) {
                Chart.defaults.font.size = 15;
			}
			if (window.innerWidth >= 1900 && window.innerWidth < 2137) {
				Chart.defaults.font.size = 18;
			}
			if (window.innerWidth >= 2137 && window.innerWidth < 2850) {
				Chart.defaults.font.size = 20;
			}
			if (window.innerWidth >= 2850 && window.innerWidth < 4275) {
				Chart.defaults.font.size = 25;
			}
			if (window.innerWidth >= 4275) {
				Chart.defaults.font.size = 40;
			}
		});
	}

	//runs responsive functions on mount and removes event listener on dismount
	useEffect(() => {
		ResponsiveChart();
		bitcoinGraphDataAction();
		return () => {
			window.removeEventListener('resize', ResponsiveChart);
		}
    }, [])

	let data = (canvas) => {
		const ctx = canvas.getContext("2d");
		const gradient = ctx.createLinearGradient(0, 0, 0, gradientSize);
		gradient.addColorStop(0, "rgba(0,77,116,.8)");
		gradient.addColorStop(1, "rgba(0,77,116,.01)");

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
					label: "Last 7 Days",
					data: [bitcoinGraphData[0], bitcoinGraphData[1], bitcoinGraphData[2], bitcoinGraphData[3], bitcoinGraphData[4], bitcoinGraphData[5], bitcoinGraphData[6]],
					backgroundColor: gradient,
					borderColor: ["#5091ed"],
                    borderWidth: 0,
				},
			],
		};
	};

	return (
		<div className="bitcoin col-12 col-lg-6 col-xl-4">
			<div className="row">
				<div className="col-6">
					<p className="bitcoinTitle">Bitcoin History</p>
				</div>
				<div className="col-6 bitcoinDaysContainer">
					<p className="bitcoinDays">Last 7 Days</p>
				</div>
			</div>
			<div className="row">
				<div className="col-12 graphContainer">
					<div className="bitcoinGraph" style={{ width: null, height: null }}>
						<Line
							data={data}
							options={{
                                responsive: true,
                                maintainAspectRatio: true,
                                aspectRatio: aspectRatio,
								elements: {
									point: {
										radius: 0,
									},
								},
								scales: {
									y: [
										{
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
									],
									x: [
										{
											gridLines: {
												display: false,
											},
										},
									],
								},
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		bitcoinGraphData: state.bitcoinGraphData,
	};
};

const mapDispatchToProps = {
	bitcoinGraphDataAction: bitcoinGraphDataAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Bitcoin);
