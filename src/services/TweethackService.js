import axios from 'axios'

const http = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true
})

const login = (obj) => http.post("/login",obj).then(data => data)
const logout = () => http.post("/logout").then(data => data)
const register = (data) => http.post('/users', data)

export default {login, logout, register}