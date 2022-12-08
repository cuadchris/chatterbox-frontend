import axios from "axios";

const instance = axios.create({
  baseURL: "https://chatterbox-backend-production.up.railway.app/"
  // baseURL: "http://localhost:9000",
  // baseURL: "https://chatterbox-backend.onrender.com"
});

export default instance;
