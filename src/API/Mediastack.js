import axios from "axios";

export default axios.create({
	baseURL: "http://api.mediastack.com/v1",
    timeout: 1000 * 10, // Wait for 10 seconds
});