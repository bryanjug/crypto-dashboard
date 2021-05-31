import CoinGecko from '../API/CoinGecko';

export const PricesData = async (page) => {
    let data;

    await CoinGecko.get(`/coins/markets?vs_currency=usd&order=price_desc&per_page=100&page=${page}&sparkline=false`)
        .then(function(response) {
            data = response.data;
        })
    
    return data;
}