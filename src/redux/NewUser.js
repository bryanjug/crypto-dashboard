import API from "../API/API";

export const NewUser = (userId) => {
    var reconnect;
    
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
            if (error.request) {
                console.log("Server is offline");
                reconnect = setInterval(() => {
                    API.get(`/favorites/${userId}`)
                        .then(function (response) {
                            clearInterval(reconnect);
                            console.log("Server is online!");
                            return;
                        })
                        .catch(function (error) {
                            if (error.request) {
                                console.log("Server is still offline");
                            }
                            if (error.response) {
                                console.log("Server is online!");
                                clearInterval(reconnect);
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
                }, 3000);
            }
        })
        
}