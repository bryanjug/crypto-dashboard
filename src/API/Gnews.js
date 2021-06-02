import axios from "axios";

export default axios.create({
	baseURL: "https://gnews.io/api/v4",
    timeout: 1000 * 10, // Wait for 10 seconds
});