import reducer, { addPosts } from './postsSlice';

describe('Posts reducer', () => {
	it('Should return default state', () => {
		const initialState = [];
		expect(reducer(undefined, { type: undefined })).toEqual(initialState);
	});

	it('Should return new state if receiving type', () => {
		const previousState = [];
		
		const posts = [{
			title: 'New post',
		}];

		const newState = reducer(previousState, addPosts(posts));
		// expect(newState).toEqual(posts);
		expect(newState).toEqual(posts);
	});
});