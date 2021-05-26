import axios from "axios";

export default axios.create({
	baseURL: "https://api.coingecko.com/api/v3",
	timeout: 1000 * 10, // Wait for 10 seconds
});
