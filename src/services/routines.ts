import axios from "axios";
const baseUrl = " http://192.168.0.12:3000/api";

const config = (token: string) => {
    return {
        headers: { Authorization: `bearer ${token}` },
    };
}

const getAll = (token: string) => {
    const request = axios.get(baseUrl + "/routines", config(token));

    return request.then((response) => response.data);
};

const getActive = (token: string) => {
    const request = axios.get(baseUrl + "/routines/active", config(token));
    return request.then((response) => response.data);
};


export default { getAll, getActive };