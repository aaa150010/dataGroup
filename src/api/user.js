import axios from "@/axios.js";
//登录接口
export function login(username, password) {
    return axios.post("/admin/login", {
        username,
        password
    })
}