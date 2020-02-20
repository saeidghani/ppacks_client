import axios from "axios";
import {toastError} from "./toast";

axios.interceptors.response.use(null, error => {
    const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;

    if (!expectedError) {
        console.log('An unexpected error occurred', error);
        toastError("An unexpected error occurred")
    }

    return Promise.reject(error);
});

// export function setJwt(jwt) {
//     axios.defaults.headers.common["x-auth-token"] = jwt;
// }

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    patch: axios.patch,
    delete: axios.delete
};
