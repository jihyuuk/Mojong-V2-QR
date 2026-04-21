import axios from "axios";

const api = axios.create({
    //baseURL: "http://localhost:8080"
    baseURL: "http://3.35.24.95:8080"
});

export default api;