import { shallow } from 'enzyme';
import { testStore, findByTestAttr } from '../Utils';
import App from './App';

const setUp = (initialState = {}) => {
	const store = testStore(initialState);
	const wrapper = shallow(<App store={store} />).childAt(0).dive();
	// console.log(wrapper.debug());
	return wrapper;
};

describe('App component', () => {
	let wrapper;
	beforeEach(() => {
		const initialState = {
			posts: [{
				title: 'Title 1',
				body: 'Some text 1',
			},{
				title: 'Title 2',
				body: 'Some text 2',
			},{
				title: 'Title 3',
				body: 'Some text 3',
			}],
		};

		wrapper = setUp(initialState);
	});

	it('Should render without errors', () => {
		const component = findByTestAttr(wrapper, 'appComponent');
		expect(component.length).toBe(1);
	});

	it('hideBtnToggle method should update state as expected', () => {
		const classInstance = wrapper.instance();
		classInstance.hideBtnToggle();
		const newState = classInstance.state.hideBtn;
		expect(newState).toBe(true);
		// classInstance.hideBtnToggle();
		// expect(classInstance.state.hideBtn).toBe(false);
	});

	it('exampleMethod_returnsAValue method should update state as expected', () => {
		const classInstance = wrapper.instance();
		const newValue = classInstance.exampleMethod_returnsAValue(6);
		expect(newValue).toBe(7);
	});
});