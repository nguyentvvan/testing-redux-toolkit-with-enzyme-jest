import { shallow } from "enzyme";
import { findByTestAttr } from "../../../Utils";
import Header from './index';

describe('Header Component', () => {
	let component;
	beforeEach(() => {
		component = shallow(<Header />);
	});

	it('Should render without errors', () => {
		const wrapper = findByTestAttr(component, 'headerComponent');
		expect(wrapper.length).toBe(1);
	});

	it('Should render a logo', () => {
		const logo = findByTestAttr(component, 'logoIMG');
		expect(logo.length).toBe(1);
	});
});