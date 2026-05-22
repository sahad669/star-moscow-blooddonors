import axios from "axios";

const axiosInstants = axios.create({
    baseURL:import.meta.env.VITE_API_URL
});

export default axiosInstants;