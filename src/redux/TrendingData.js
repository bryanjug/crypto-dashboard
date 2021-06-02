import CoinGecko from "../API/CoinGecko";

export const TrendingData = async () => {
	let data = [];
	let coinList = [];

	let coin_id_0;
	let coin_id_1;
	let coin_id_2;
	let coin_id_3;
	let coin_id_4;
	let coin_id_5;
	let coin_id_6;

	let coin_img_0;
	let coin_img_1;
	let coin_img_2;
	let coin_img_3;
	let coin_img_4;
	let coin_img_5;
    let coin_img_6;
    
    let coin0;
	let coin1;
	let coin2;
	let coin3;
	let coin4;
	let coin5;
    let coin6;
    
    let price0;
    let price1;
    let price2;
    let price3;
    let price4;
    let price5;
    let price6;

    await CoinGecko.get("/search/trending")
        .then(function (response) {
		coin_id_0 = response.data.coins[0].item.id;
		coin_id_1 = response.data.coins[1].item.id;
		coin_id_2 = response.data.coins[2].item.id;
		coin_id_3 = response.data.coins[3].item.id;
		coin_id_4 = response.data.coins[4].item.id;
		coin_id_5 = response.data.coins[5].item.id;
		coin_id_6 = response.data.coins[6].item.id;

		coin_img_0 = response.data.coins[0].item.large;
		coin_img_1 = response.data.coins[1].item.large;
		coin_img_2 = response.data.coins[2].item.large;
		coin_img_3 = response.data.coins[3].item.large;
		coin_img_4 = response.data.coins[4].item.large;
		coin_img_5 = response.data.coins[5].item.large;
        coin_img_6 = response.data.coins[6].item.large;

		coin0 = `%2C${coin_id_0}`;
		coin1 = `%2C${coin_id_1}`;
		coin2 = `%2C${coin_id_2}`;
		coin3 = `%2C${coin_id_3}`;
		coin4 = `%2C${coin_id_4}`;
		coin5 = `%2C${coin_id_5}`;
		coin6 = `%2C${coin_id_6}`;

        coinList = [coin0, coin1, coin2, coin3, coin4, coin5, coin6];
	})

    await CoinGecko.get(`/simple/price?ids=${coinList}&vs_currencies=usd&include_24hr_change=false`)
        .then(function (response) {
            price0 = response.data.[coin_id_0].usd;
            price1 = response.data.[coin_id_1].usd;
            price2 = response.data.[coin_id_2].usd;
            price3 = response.data.[coin_id_3].usd;
            price4 = response.data.[coin_id_4].usd;
            price5 = response.data.[coin_id_5].usd;
            price6 = response.data.[coin_id_6].usd;
        })

    data = [
        [coin_id_0, coin_img_0, price0],
        [coin_id_1, coin_img_1, price1],
        [coin_id_2, coin_img_2, price2],
        [coin_id_3, coin_img_3, price3],
        [coin_id_4, coin_img_4, price4],
        [coin_id_5, coin_img_5, price5],
        [coin_id_6, coin_img_6, price6],
    ];

    return data;
};
