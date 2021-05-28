import CoinGecko from '../API/CoinGecko';

export const ChangesData = async () => {
    let data = [];
    let id_0;
    let id_1;
    let id_2;
    let id_3;
    let id_4;
    let id_5;
    let id_6;

    let image_0;
    let image_1;
    let image_2;
    let image_3;
    let image_4;
    let image_5;
    let image_6;
    
    let change_0;
    let change_1;
    let change_2;
    let change_3;
    let change_4;
    let change_5;
    let change_6;

    //highest positives - h24_change_desc
    await CoinGecko.get("/coins/markets?vs_currency=usd&order=h24_change_desc&per_page=10&page=1&sparkline=false")
        .then(function(response) {
            id_0 = response.data.[0].id;
            id_2 = response.data.[1].id;
            id_4 = response.data.[2].id;
            id_6 = response.data.[3].id;

            image_0 = response.data.[0].image;
            image_2 = response.data.[1].image;
            image_4 = response.data.[2].image;
            image_6 = response.data.[3].image;

            change_0 = response.data.[0].price_change_percentage_24h;
            change_2 = response.data.[1].price_change_percentage_24h;
            change_4 = response.data.[2].price_change_percentage_24h;
            change_6 = response.data.[3].price_change_percentage_24h;
    })
    //highest negatives - h24_change_asc
    await CoinGecko.get("/coins/markets?vs_currency=usd&order=h24_change_asc&per_page=10&page=1&sparkline=false")
        .then(function(response) {
            id_1 = response.data.[0].id;
            id_3 = response.data.[1].id;
            id_5 = response.data.[2].id;

            image_1 = response.data.[0].image;
            image_3 = response.data.[1].image;
            image_5 = response.data.[2].image;
            
            change_1 = response.data.[0].price_change_percentage_24h;
            change_3 = response.data.[1].price_change_percentage_24h;
            change_5 = response.data.[2].price_change_percentage_24h;
        })

    data = [
        [id_0, image_0, change_0],
        [id_1, image_1, change_1],
        [id_2, image_2, change_2],
        [id_3, image_3, change_3],
        [id_4, image_4, change_4],
        [id_5, image_5, change_5],
        [id_6, image_6, change_6],
    ];

    return data;
}