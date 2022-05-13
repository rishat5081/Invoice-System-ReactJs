import axios from "axios";

export default axios.create({
  // https://uk-wholesale-app.azurewebsites.net/api/account/LogInUser
  baseURL: "https://uk-webapp-dotnet.azurewebsites.net/",
  // baseURL: "http://192.168.100.44:45455",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
