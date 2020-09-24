import axios from "axios";

var instance = axios.create({
  baseURL: "https://api.covidindiatracker.com",
});

export default instance;
