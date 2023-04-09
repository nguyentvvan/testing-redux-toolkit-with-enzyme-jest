import axiosClient from './axiosClient';

const postAPI = {
	getAll(params) {
		const url = '/posts';
		return axiosClient.get(url, { params });
	},
};

export default postAPI;