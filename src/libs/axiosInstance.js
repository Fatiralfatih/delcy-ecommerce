import axios from "axios";

export const axiosInstance = axios.create({
    // eslint-disable-next-line no-undef
    baseURL: 'http://localhost:8000/api',
    // withCredentials: true,
    // withXSRFToken: true,
    // headers: {
    //     "Content-Type": "application/json",
    //     "Accept": "application/json",
    // },

})
