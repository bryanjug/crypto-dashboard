import API from "../API/API";

export const NewUser = (userId) => {
    var reconnect;
    
    return API.get(`/favorites/${userId}`)
        .then(function(response) {
            console.log("Server is online!");
            return true;
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

                API.post("/favorites", payload)
                .then(function(response) {
                    console.log("Server is online!");
                    return true;
                })
            }
            if (error.request) {
                console.log("Server is offline");
                reconnect = setInterval(() => {
                    API.get(`/favorites/${userId}`)
                        .then(function (response) {
                            clearInterval(reconnect);
                            console.log("Server is online!");
                            return true;
                        })
                        .catch(function (error) {
                            if (error.request) {
                                console.log("Server is still offline");
                            }
                            if (error.response) {
                                clearInterval(reconnect);
                                let payload = {
                                    id: `${userId}`,
                                    favorite1: "",
                                    favorite2: "",
                                    favorite3: "",
                                    favorite4: "",
                                };
                
                                API.post("/favorites", payload)
                                    .then(function(response) {
                                        console.log("Server is online!");
                                        return true;
                                    })
                            }
                        })
                }, 3000);
            }
        })
        
}