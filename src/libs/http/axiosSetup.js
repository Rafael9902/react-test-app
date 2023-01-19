import axios from 'axios';

export const initializeAxios = (config) => {
    const axiosInstance = axios.create(config);

    /*
        Add default headers, interceptors etc..
    */

    return axiosInstance;
};
