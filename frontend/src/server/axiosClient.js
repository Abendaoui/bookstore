import axios from "axios";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
});

axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("ACCESS_TOKEN");
    const adminToken = localStorage.getItem("ADMIN_TOKEN");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    } else {
        config.headers.Authorization = `Bearer ${adminToken}`;
    }

    return config;
});
axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        try {
            const { request } = error;
            if (request.status === 401) {
                localStorage.removeItem("ACCESS_TOKEN");
            }
        } catch (error) {
            console.log(error);
        }

        throw error;
    }
);

export default axiosClient;
