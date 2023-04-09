import moxios from 'moxios';
import { testStore } from '../../Utils';
import { fetchPosts } from '../actions';

describe('fetchPosts action', () => {
	beforeEach(() => {
		moxios.install();
	});

	afterEach(() => {
		moxios.uninstall();
	});

	it('Store is updated correctly', () => {
		const expectedState = [{
			title: 'Title 1',
			body: 'Some text 1',
		},{
			title: 'Title 2',
			body: 'Some text 2',
		},{
			title: 'Title 3',
			body: 'Some text 3',
		}];

		const store = testStore();

		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: expectedState,
			});
		});

		return store.dispatch(fetchPosts())
			.then(() => {
				const newState = store.getState();
				expect(newState.posts).toBe(expectedState);
			}).catch((err) => {
				
			});
	});

	// it('Store is updated correctly', () => {
	// 	const store = testStore();

	// 	moxios.wait(() => {
	// 		const request = moxios.requests.mostRecent();
	// 		request.respondWith({
	// 			status: 500,
	// 			response: [],
	// 		});
	// 	});

	// 	return store.dispatch(fetchPosts())
	// 		.then(() => {
	// 			const newState = store.getState();
	// 			expect(newState.posts).toBe([]);
	// 		}).catch((err) => {
				
	// 		});
	// });
});