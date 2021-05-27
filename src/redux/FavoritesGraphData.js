import CoinGecko from "../API/CoinGecko";

export const FavoritesGraphData = (favorites) => {
    let favorite0 = `${favorites[0]}%2C`;
    return CoinGecko.get(`/simple/price?ids=1world%2Cbitcoin%2C0x&vs_currencies=usd&include_24hr_change=true`)
        .then(function(response) {

            // const day0 = response.data.prices[0].[1];
            // const day1 = response.data.prices[1].[1];
            // const day2 = response.data.prices[2].[1];
            // const day3 = response.data.prices[3].[1];
            // const day4 = response.data.prices[4].[1];
            // const day5 = response.data.prices[5].[1];
            // const today = response.data.prices[6].[1];

            // const data = [day0, day1, day2, day3, day4, day5, today];
            // return data;
        })
}