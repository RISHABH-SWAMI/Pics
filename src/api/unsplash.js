import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID muCPXzcxgrDj_JlwOqK49ifUcDvNOmHN5etf3BA_Ics",
  },
});
