import axios from "axios";

export const axiosInstance = axios.create({
    // eslint-disable-next-line no-undef
    baseURL: process.env.API_URL,
})
