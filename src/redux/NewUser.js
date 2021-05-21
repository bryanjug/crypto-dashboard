import API from "../API/API";

export const NewUser = (userId) => {
    return API.get(`/favorites/${userId}`)
        .then(function(response) {
            return;
        })
        .catch(function (error) {
            if (error.response) {
                let payload = {
                    id: `${userId}`,
                    favorite1: "",
                    favorite2: "",
                    favorite3: "",
                    favorite4: "",
                };

                return API.post("/favorites", payload);
            }
        })
}