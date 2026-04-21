import axios from "axios";

const api = axios.create({
    //baseURL: "http://localhost:8080"
    baseURL: "/api"
});

export default api;