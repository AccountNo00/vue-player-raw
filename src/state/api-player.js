import axios from "axios";

// MAIN API
const api = axios.create({
    baseURL: process.env.VUE_APP_BACKEND_API_PLAYER + "/api/",
});

api.defaults.headers.common["Accept"] = "application/json";

export default api;