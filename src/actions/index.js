import axios from "axios";
import { types } from './types';

export const fetchPosts = (payload) => async (dispatch) => {
	// await axios.get('http://localhost:3001/posts')
	await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
		.then(res => {
			dispatch({
				type: types.GET_POSTS,
				payload: res.data,
			});
		})
		.catch(error => {
			console.log(error);
		});
};