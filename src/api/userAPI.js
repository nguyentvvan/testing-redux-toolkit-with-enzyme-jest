import axiosClient from './axiosClient';

const userApi = {
	fetchUser(params) {
		const url = '/user';
		return axiosClient.get(url, { params });
	},
};

export default userApi;