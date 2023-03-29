import axios from 'axios';
// import queryString from 'query-string';

const axiosClient = axios.create({
	baseURL: 'http://localhost:3001',
	headers: {
		'Content-Type': 'application/json',
	},
	// paramsSerializer: params => queryString.stringify(params),
});

// interceptors
axiosClient.interceptors.request.use(
	// function (config: AxiosRequestConfig) {
	function (config) {
		return config;
	}, 
	function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
	// function (response: AxiosResponse) {
	function (response) {
		if (response && response.data) {
			return response.data;
			// return response.headers['X-Total-Count'];
		}
		return response;
	},
	function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

export default axiosClient;