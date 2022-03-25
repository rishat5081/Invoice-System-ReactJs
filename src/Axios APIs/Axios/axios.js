import axios from "axios";

export default axios.create({
  baseURL: "https://192.168.10.19:45455",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
