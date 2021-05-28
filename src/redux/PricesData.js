import CoinGecko from '../API/CoinGecko';

export const PricesData = async (page) => {
    await CoinGecko.get(`/coins/markets?vs_currency=usd&order=price_desc&per_page=100&page=1&sparkline=false`)
        .then(function(response) {
            
        })
}