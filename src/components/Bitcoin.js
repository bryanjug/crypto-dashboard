import React, { useState, useEffect } from "react";
import { Line, Chart } from "react-chartjs-2";

const Bitcoin = () => {
    const [chartData, setChartData] = useState({});
    const [aspectRatio, setAspectRatio] = useState(2);
	Chart.defaults.scale.grid.display = false;
    Chart.defaults.scale.grid.borderWidth = 0;

	//changes font size and height of chart
	const ResponsiveChart = () => {
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

		return () => {
			window.removeEventListener('resize', ResponsiveChart);
		}
    }, [])

	let data = (canvas) => {
		const ctx = canvas.getContext("2d");
		const gradient = ctx.createLinearGradient(0, 0, 0, 250);
		gradient.addColorStop(0, "rgba(0,170,255,0.8147944697627315)");
        gradient.addColorStop(1, "rgba(0,212,255,0)");

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
					data: [7040, 7754, 6999, 6486, 8043, 7550, 8842],
					backgroundColor: gradient,
					borderColor: ["#1F3D71"],
                    borderWidth: 3,
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
				<div className="col-6 bitcoinDropdownContainer">
					<select
						name="bitcoinDropdown"
						id="bitcoinDropdown"
						className="bitcoinDropdown"
					>
						<option value="7day">Last 7 days</option>
						<option value="1day">1 day</option>
						<option value="1month">1 month</option>
						<option value="1year">1 year</option>
					</select>
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

export default Bitcoin;
