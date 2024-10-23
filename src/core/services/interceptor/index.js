import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
  baseURL: baseURL,
});

const onSuccess = (response) => {
  return response.data;
};

const onError = (err) => {
  // console.log("Interceptor : " + err);

  // if (err.response.status >= 400 && err.response.status < 500) {
  //   alert("Client error: " + err.response.status);
  // }

  return Promise.reject(err);
};

instance.interceptors.response.use(onSuccess, onError);

instance.interceptors.request.use((opt) => {
  // token
  // opt.headers["Test-Header-Key"] = "This key will be sent alongside other header keys";
  return opt;
});

export default instance;
