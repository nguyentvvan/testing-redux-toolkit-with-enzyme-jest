import { shallow } from 'enzyme';
import { checkProps, findByTestAttr } from '../../../Utils';
import ListItem from './';

describe('ListItem component', () => {
	describe('Checking PropTypes', () => {
		it('Should NOT throw a warning', () => {
			const expectedProps = {
				title: 'Title',
				desc: 'Lorem ipsum dolor sit amet, consectetur',
			};

			const propsError = checkProps(ListItem, expectedProps);
			expect(propsError).toBeUndefined();
		});
	});

	describe('Render', () => {
		let component;

		beforeEach(() => {
			const props = {
				title: 'Title',
				desc: 'Lorem ipsum dolor sit amet, consectetur',
			};
			component = shallow(<ListItem {...props} />);
		});

		it('Should render a list item', () => {
			const item = findByTestAttr(component, 'listItemComponent');
			expect(item.length).toBe(1);
		});

		it('Should render a title', () => {
			const title = findByTestAttr(component, 'componentTitle');
			expect(title.length).toBe(1);
		});

		it('Should render a description', () => {
			const desc = findByTestAttr(component, 'componentDesc');
			expect(desc.length).toBe(1);
		});
	});

	describe('NOT render', () => {
		let component;

		beforeEach(() => {
			const props = {
				desc: 'Lorem ipsum dolor sit amet, consectetur',
			};
			component = shallow(<ListItem {...props} />);
		});

		it('Should NOT render component', () => {
			const item = findByTestAttr(component, 'listItemComponent');
			expect(item.length).toBe(0);
		})
	});
});