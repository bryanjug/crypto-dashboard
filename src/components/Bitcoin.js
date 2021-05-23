import React, {useState, useEffect} from 'react';
import {Line} from 'react-chartjs-2';

const Bitcoin = () => {
    const [chartData, setChartData] = useState({});

    const chart = () => {
		setChartData({
			labels: [
				"1",
				"2",
				"3",
				"4",
				"5",
				"6",
				"7"
			],
			datasets: [
				{
					label: "Last 7 Days",
					data: [
						7040,
						7754,
						6999,
						6486,
						8043,
						7550,
						8842
					],
					backgroundColor: [
                        'rgba(255, 99, 132, 1)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)'
                    ],
                    borderWidth: 4
				},
			],
		});
    };

    useEffect(() => {
        chart();
    }, [])
    
    return (
        <div className="bitcoin col-12 col-lg-6 col-xl-4">
            <div className="row">
                <div className="col-6">
                    <p className="bitcoinTitle">Bitcoin History</p>
                </div>
                <div className="col-6 bitcoinDropdownContainer">
                    <select name="bitcoinDropdown" id="bitcoinDropdown" className="bitcoinDropdown">
                        <option value="7day">Last 7 days</option>
                        <option value="1day">1 day</option>
                        <option value="1month">1 month</option>
                        <option value="1year">1 year</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="graph" style={{ width: "100%", height: "100%" }}>
                        <Line
                            data={chartData}
                            options={{
                                responsive: true,
                                maintainAspectRatio: false,
                                scales: {
                                    yAxes: [
                                        {
                                            ticks: {
                                                autoSkip: true,
                                                maxTicksLimit: 10,
                                                beginAtZero: true,
                                            },
                                            gridLines: {
                                                display: false,
                                            },
                                        },
                                    ],
                                    xAxes: [
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
}

export default Bitcoin;