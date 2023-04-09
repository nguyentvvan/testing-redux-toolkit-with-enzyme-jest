import reducer from './reducer';
import { types } from '../../actions/types';

describe('Posts reducer', () => {
	it('Should return default state', () => {
		const initialState = reducer(undefined, {});
		expect(initialState).toEqual([]);
	});

	it('Should return new state if receiving type', () => {
		const previousState = [];
		
		const posts = [
			{ title: 'New post'},
			{ title: 'New post 1'},
		];

		const newState = reducer(previousState, {
			type: types.GET_POSTS,
			payload: posts,
		});
		expect(newState).toEqual(posts);
	});
});