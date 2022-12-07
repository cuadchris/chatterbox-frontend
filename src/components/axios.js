import axios from "axios";

const instance = axios.create({
  baseURL: "https://chatterbox-backend.onrender.com",
});

export default instance;
