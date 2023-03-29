import reducer, { addPost } from './postsSlice';

describe('Posts reducer', () => {
	it('Should return default state', () => {
		const initialState = [];
		expect(reducer(undefined, { type: undefined })).toEqual(initialState);
	});

	it('Should return new state if receiving type', () => {
		const previousState = [];
		
		const post = {
			title: 'New post',
		};

		const newState = reducer(previousState, addPost(post));
		// expect(newState).toEqual(posts);
		expect(newState).toEqual([post]);
	});
});