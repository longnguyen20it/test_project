import axiosClient from "./axiosClient";

const postApi = {
    getAll: (params) => {
        const url = "/articles";
        return axiosClient.get(url, { params });
    },
    get: (id) => {
        const url = `/articles/${id}`;
        return axiosClient.get(url);
    },
};

export default postApi;
