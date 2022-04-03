import axios from "axios";

// const TOKEN = `Bearer ${localStorage.getItem("token")}`;
const TOKEN = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDdiNWEwOWM0Y2NmNzAwMTUzOTk5ZDUiLCJpYXQiOjE2NDYwMDUwODYsImV4cCI6MTY0NjA5MTQ4Nn0.2N75rJcnU5YMJPLz1wo9wqiMFut_6ndk6RR3OZBNPxw`;

export default axios.create({
  baseURL: `https://encuentrosapp.herokuapp.com`,
  headers: {
    "Content-type": "application/json",
    Authorization: TOKEN
  }
});
