import axios from "axios";

export default axios.create({
  // https://uk-wholesale-app.azurewebsites.net/api/account/LogInUser
  baseURL: "https://uk-webapp-dotnet.azurewebsites.net/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
