import axiosClient from './axiosClient';

const userAPI = {
	fetchUser(params) {
		const url = '/user';
		return axiosClient.get(url, { params });
	},
};

export default userAPI;