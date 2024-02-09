import axios from "axios";
import { UserLogin, UserRegister } from "../types/applicationtypes";
const baseUrl = " http://192.168.0.12:3000/api";

const login = (data: UserLogin) => {
    const request = axios.post(baseUrl + "/login", data);
    return request.then((response) => response.data);
};
const signUp = (data: UserRegister) => {
    const request = axios.post(baseUrl + "/users", data);
    return request.then((response) => response.data);
};
export default { login, signUp };