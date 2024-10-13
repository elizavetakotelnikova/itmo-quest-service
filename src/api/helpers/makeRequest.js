import axios from 'axios';

//вынести в env переменную

export const instance = axios.create({
    baseURL: 'https://user230084945-wvb4r7lk.wormhole.vk-apps.com/',
    headers: {
        'Content-Type': 'application/json',
        mode: 'no-cors',
        Authorization: `VK ${btoa(window.location.search)}`,
    },
});

instance.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        return Promise.reject(error);
    },
);


export const makeRequest = async (
    method,
    url,
    params
) => {
    try {
        const response = await instance({
            method: method,
            url: url,
            data: params,
        });

        return response.data;
    } catch (e) {
        return Promise.reject(e);
    }
};