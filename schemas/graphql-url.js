// @ts-check
import axios from "axios";

const TOKEN = localStorage.getItem("token");

export default axios.create({
  baseURL: `http://localhost:4000/graphql`,
  headers: {
    "Content-Type": "aplication/json",
    Authotization: TOKEN
  }
});
