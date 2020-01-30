import axios from 'axios'

const http = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true
})

const login = (obj) => http.post("/login",obj).then(data => data)
//const login = (obj) => http.post("",obj).then(data => data)

export default {login}