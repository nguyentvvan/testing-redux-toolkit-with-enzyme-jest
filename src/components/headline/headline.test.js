import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../../Utils";

import Headline from ".";

const setUp = (props) => {
	const component = shallow(<Headline {...props} />);
	return component;
};

describe('Headline component', () => {
	describe('Checking PropTypes', () => {
		it('Should not throw a warning', () => {
			const expectedProps = {
				header: 'Test Header',
				desc: 'Test Desc',
				tempArr: [{
						fName: 'Test fName',
						lName: 'Test lName',
						email: 'test@email.com',
						age: 23,
						onlineStatus: false
				}]
			};
			const propsErr = checkProps(Headline, expectedProps);
			expect(propsErr).toBeUndefined();
		});
	});
	
	describe('Have props', () => {
		let component;
		beforeEach(() => {
			const props = {
				header: 'Test Header',
				desc: 'Test Description',
			};
			component = setUp(props);
		});

		it('Should render without errors', () => {
			const wrapper = findByTestAttr(component, 'headlineComponent');
			expect(wrapper.length).toBe(1);
		});

		it('Should render header h1 element', () => {
			const h1 = findByTestAttr(component, 'header');
			expect(h1.length).toBe(1);
		});

		it('Should render description p element', () => {
			const p = findByTestAttr(component, 'description');
			expect(p.length).toBe(1);
		});
	});

	describe('Have no props', () => {
		let component;
		beforeEach(() => {
			component = setUp({});
		});

		it('Should not render', () => {
			const wrapper = findByTestAttr(component, 'headlineComponent');
			expect(wrapper.length).toBe(0);
		});
	});
});