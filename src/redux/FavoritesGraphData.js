import CoinGecko from "../API/CoinGecko";

export const FavoritesGraphData = async (favorites) => {
    let favorite0 = `%2C${favorites[0]}`;
    let favorite1 = `%2C${favorites[1]}`;
    let favorite2 = `%2C${favorites[2]}`;
    let favorite3 = `%2C${favorites[3]}`;

    let favoriteList = [favorite0, favorite1, favorite2, favorite3];

    let price0;
    let price1;
    let price2;
    let price3;
    let priceChange0;
    let priceChange1;
    let priceChange2;
    let priceChange3;

    let day0_0;
    let day1_0;
    let day2_0;
    let day3_0;
    let day4_0;
    let day5_0;
    let today_0;

    let day0_1;
    let day1_1;
    let day2_1;
    let day3_1;
    let day4_1;
    let day5_1;
    let today_1;

    let day0_2;
    let day1_2;
    let day2_2;
    let day3_2;
    let day4_2;
    let day5_2;
    let today_2;

    let day0_3;
    let day1_3;
    let day2_3;
    let day3_3;
    let day4_3;
    let day5_3;
    let today_3;

    await CoinGecko.get(`/simple/price?ids=${favoriteList}&vs_currencies=usd&include_24hr_change=true`)
        .then(function(response) {
            if (favorites[0] !== "") {
                price0 = response.data.[favorites[0]].usd;
                console.log(response.data.[favorites[0]])
                priceChange0 = response.data.[favorites[0]].usd_24h_change;
            } else {
                price0 = 0;
                priceChange0 = 0;
            }
            if (favorites[1] !== "") {
                price1 = response.data.[favorites[1]].usd;
                priceChange1 = response.data.[favorites[1]].usd_24h_change;
            } else {
                price1 = 0;
                priceChange1 = 0;
            }
            if (favorites[2] !== "") {
                price2 = response.data.[favorites[2]].usd;
                priceChange2 = response.data.[favorites[2]].usd_24h_change;
            } else {
                price2 = 0;
                priceChange2 = 0;
            }
            if (favorites[3] !== "") {
                price3 = response.data.[favorites[3]].usd;
                priceChange3 = response.data.[favorites[3]].usd_24h_change;
            } else {
                price3 = 0;
                priceChange3 = 0;
            }
        })

    if (favorites[0] !== "") {
        await CoinGecko.get(`/coins/${favorites[0]}/market_chart?vs_currency=usd&days=14&interval=daily`)
            .then(function(response) {
                let length = (response.data.prices).length;

                day0_0 = response.data.prices[length - 7].[1];
                day1_0 = response.data.prices[length - 6].[1];
                day2_0 = response.data.prices[length - 5].[1];
                day3_0 = response.data.prices[length - 4].[1];
                day4_0 = response.data.prices[length - 3].[1];
                day5_0 = response.data.prices[length - 2].[1];
                today_0 = response.data.prices[length - 1].[1];
            })
    } else {
        day0_0 = 0;
        day1_0 = 0;
        day2_0 = 0;
        day3_0 = 0;
        day4_0 = 0;
        day5_0 = 0;
        today_0 = 0;
    }

    if (favorites[1] !== "") {
        await CoinGecko.get(`/coins/${favorites[1]}/market_chart?vs_currency=usd&days=14&interval=daily`)
            .then(function(response) {
                let length = (response.data.prices).length;

                day0_1 = response.data.prices[length - 7].[1];
                day1_1 = response.data.prices[length - 6].[1];
                day2_1 = response.data.prices[length - 5].[1];
                day3_1 = response.data.prices[length - 4].[1];
                day4_1 = response.data.prices[length - 3].[1];
                day5_1 = response.data.prices[length - 2].[1];
                today_1 = response.data.prices[length - 1].[1];
            })
    } else {
        day0_1 = 0;
        day1_1 = 0;
        day2_1 = 0;
        day3_1 = 0;
        day4_1 = 0;
        day5_1 = 0;
        today_1 = 0; 
    }
    if (favorites[2] !== "") {
        await CoinGecko.get(`/coins/${favorites[2]}/market_chart?vs_currency=usd&days=14&interval=daily`)
            .then(function(response) {
                let length = (response.data.prices).length;
                
                day0_2 = response.data.prices[length - 7].[1];
                day1_2 = response.data.prices[length - 6].[1];
                day2_2 = response.data.prices[length - 5].[1];
                day3_2 = response.data.prices[length - 4].[1];
                day4_2 = response.data.prices[length - 3].[1];
                day5_2 = response.data.prices[length - 2].[1];
                today_2 = response.data.prices[length - 1].[1];
            })
    } else {
        day0_2 = 0;
        day1_2 = 0;
        day2_2 = 0;
        day3_2 = 0;
        day4_2 = 0;
        day5_2 = 0;
        today_2 = 0;
    }

    if (favorites[3] !== "") {
        await CoinGecko.get(`/coins/${favorites[3]}/market_chart?vs_currency=usd&days=14&interval=daily`)
            .then(function(response) {
                let length = (response.data.prices).length;
                
                day0_3 = response.data.prices[length - 7].[1];
                day1_3 = response.data.prices[length - 6].[1];
                day2_3 = response.data.prices[length - 5].[1];
                day3_3 = response.data.prices[length - 4].[1];
                day4_3 = response.data.prices[length - 3].[1];
                day5_3 = response.data.prices[length - 2].[1];
                today_3 = response.data.prices[length - 1].[1];
            })
    } else {
        day0_3 = 0;
        day1_3 = 0;
        day2_3 = 0;
        day3_3 = 0;
        day4_3 = 0;
        day5_3 = 0;
        today_3 = 0;
    }
    
    const data = 		
    [
        [day0_0, day1_0, day2_0, day3_0, day4_0, day5_0, today_0, price0, priceChange0],
        [day0_1, day1_1, day2_1, day3_1, day4_1, day5_1, today_1, price1, priceChange1],
        [day0_2, day1_2, day2_2, day3_2, day4_2, day5_2, today_2, price2, priceChange2],
        [day0_3, day1_3, day2_3, day3_3, day4_3, day5_3, today_3, price3, priceChange3]
    ];

    return data;
}