import { shallow } from 'enzyme';
import SharedButton from '.';
import { checkProps, findByTestAttr } from '../../../Utils';

describe('SharedButton component', () => {
	describe('Checking PropTypes', () => {
		it('Should NOT throw a warning', () => {
			const expectedProps = {
				buttonText: 'Example Button Text',
				emitEvent: () => {},
			};

			const propsError = checkProps(SharedButton, expectedProps);
			expect(propsError).toBeUndefined();
		});
	});

	describe('Render', () => {
		let component;

		let mockFunc;

		beforeEach(() => {
			mockFunc = jest.fn();
			const props = {
				buttonText: 'Example Button Text',
				emitEvent: mockFunc,
			};
			component = shallow(<SharedButton {...props} />);
		});

		it('Should render a button', () => {
			const button = findByTestAttr(component, 'buttonComponent');
			expect(button.length).toBe(1);
		});

		it('Should emit callback on click event', () => {
			const button = findByTestAttr(component, 'buttonComponent');
			button.simulate('click');
			const callback = mockFunc.mock.calls.length;
			expect(callback).toBe(1);
		});
	});
	
});