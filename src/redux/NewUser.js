import API from "../API/API";

export const NewUser = async (userId) => {
	var reconnect;

	return new Promise((resolve, reject) => {
		API.get(`/favorites/${userId}`)
			.then(function (response) {
				console.log("Server is online!");
				resolve(true);
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

					API.post("/favorites", payload).then(function (response) {
						console.log("Server is online!");
						resolve(true);
					});
				}
				if (error.request) {
					console.log("Server is offline");
					reconnect = setInterval(() => {
						API.get(`/favorites/${userId}`)
							.then(function (response) {
								console.log("Server is online!");
								clearInterval(reconnect);
								resolve(true);
							})
							.catch(function (error) {
								if (error.request) {
									console.log("Server is still offline");
								}
								if (error.response) {
									let payload = {
										id: `${userId}`,
										favorite1: "",
										favorite2: "",
										favorite3: "",
										favorite4: "",
									};

									API.post("/favorites", payload).then(function (response) {
										console.log("Server is online!");
										clearInterval(reconnect);
										resolve(true);
									});
								}
							});
					}, 3000);
				}
			});
	});
};
