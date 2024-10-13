import axios from 'axios';

const getFormData = object => {
    const formData = new FormData();
    Object.keys(object).forEach(key => formData.append(key, object[key]));
    return formData;
}

//вынести в env переменную

export const instance = axios.create({
    baseURL: 'https://user230084945-ue7p7xqt.wormhole.vk-apps.com/',
    headers: {
        // 'Content-Type': 'application/json',
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
        console.log(method, url, params);
        const response = await instance({
            method: method,
            url: url,
            data: params,
        });

        // let requestParams = {
        //     headers: {
        //         Authorization: `VK ${btoa(window.location.search)}`,
        //     },
        //     method
        // }
        // if (method === 'POST') requestParams.body = getFormData(params)
        // return fetch('https://user230084945-7esegkot.wormhole.vk-apps.com' + url, requestParams).then(r => r.json())
        //     .then(r => {
        //         console.log(r);
        //         return r
        //     })

        // const response = await fetch('https://user230084945-7esegkot.wormhole.vk-apps.com' + url, {
        //     headers: {
        //         Authorization: `VK ${btoa(window.location.search)}`, 'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(params),
        //     method
        // });
        // const response = await instance({
        //     method: method,
        //     url: url,
        //     data: params,
        // });
        console.log("response", response);
        return response;
    } catch (e) {
        return Promise.reject(e);
    }
};