import Axios from "axios";

const axios = Axios.create({
  // baseURL: "http://localhost:8000/backend",
  baseURL: "https://api.example.com/backend",
});

export default axios;
