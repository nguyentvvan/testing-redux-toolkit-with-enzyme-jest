import axiosClient from './axiosClient';

const postApi = {
	getAll(params) {
		const url = '/posts';
		return axiosClient.get(url, { params });
	},
};

export default postApi;