import API from "../API/API";

export const FetchFavorites = (userId) => {
    return API.get(`/favorites/${userId}`)
        .then(function(response) {
            const favorite1 = response.data.favorite1;
            const favorite2 = response.data.favorite2;
            const favorite3 = response.data.favorite3;
            const favorite4 = response.data.favorite4;
            const favorites = [favorite1, favorite2, favorite3, favorite4];
            return favorites;
        })
}