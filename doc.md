npx create-react-app

npm i -D enzyme enzyme-adapter-react-16 jest jest-enzyme
Create file setup for testing
npm i node-sass

Create header component (./src/components/header : index.js, spec.js, styles.scss, header.test.js)
(Thông thường sẽ phải viết test trước khi implement => theo TDD)
(A test file: *.test.js)
(Test files phải có ít nhất 1 test case => nếu ko có thì kết quả khi chạy test là fail)

Spec.js => we can use 2 methods: test() and it() => it’s same
it(describe: string, () => {}) 
it(‘It should render without errors’ () => {}) => passed
it(‘It should render without errors’ () => {
	expect(1).toBe(2);
}) => failed => It should render without errors …

describe(‘Header component’, () => {
	it(‘It should render without errors’ () => {
		expect(1).toBe(2);
	})
}) => failed => Header component > It should render without errors …


describe(‘Header component’, () => {
	describe(‘Nested’, () => {
		it(‘It should render without errors’ () => {
			expect(1).toBe(2);
		})
	})
}) => failed => Header component > Nested > It should render without errors …

(Shallow render component by shallow from enzyme) => add class name for element that we wanna test
Import Header from ‘./index’;

describe(‘Header component’, () => {
	it(‘It should render without errors’ () => {
		const component = shallow(<Header />);
		const wrapper = 
	})
})

- because we usually use class name for css or orther business logic, we shouldn't use it in unit tests, we should use data-test attribute instead

## proptypes
npm i --save prop-types

## fetch data axios
npm i -D json-server concurrently
json-server --midafter --watch db.json -p 3001
npm i query-string axios