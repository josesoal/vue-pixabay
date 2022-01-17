import axios from "axios";

export default axios.create({
  baseURL: 'https://pixabay.com/api/',
  timeout: 1000,
  headers: {
    'Content-type':'application/json'
  }
})