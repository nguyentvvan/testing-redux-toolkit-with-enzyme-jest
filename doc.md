https://www.youtube.com/watch?v=92F8_9UG04g&list=PL-Db3tEF6pB8Am-IhCRgyGSxTalkDpUV_&index=8

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

## proptypes (video 3)
npm i --save prop-types

## redux toolkit (video 6)
redux
- pm i redux react-redux redux-thunk
- create reducers/index.js + reducers/posts/reducer.js + ./createStore.js + reducers/posts/reducer.test.js + ./actions/types.js
- add Provider in ./index.js
- add redux thunk in middlewares
- writing unit tests for checking initialState
- writing unit tests for checking action in redux (cases) (passing action types and payload)
- writing actions in reducers/posts/reducer.js (switch case)


redux toolkit
npm install @reduxjs/toolkit react-redux

## fetch data axios (video 6)

- create SharedButton: create empty component first => write unit test for checking proptypes => checking render (content and elements: button) => checking event => write component

- create ListItem: create empty component first => write unit test for checking proptypes => checking render (content and elements: component, title and description) => checking not render (if props missing something) => checking event => write component

npm i axios
- create actions/index.js
write fetchPosts action
- call fetchPosts in app
- call applymiddleware, createStore in Utils/index.js => use this to write integration tests
- create ./src/_integrationTests/index.js
- npm i -D moxios
- writing tests in ./src/_integrationTests/index.js (using moxios for mocking fetching api)

=> create action and fetch data => call action to add it into redux state (await axios.get('url')...)

npm i -D json-server concurrently
json-server --midafter --watch db.json -p 3001
npm i query-string axios@0.27.2

## writing test for App.js (video 7)
- create ./src/App.test.js
- shallow().childAt(0).dive()

## Simulate Events (video 8)
it('Should emit callback on click event', () => {
			const button = findByTestAttr(component, 'buttonComponent');
			button.simulate('click');
			const callback = mockFunc.mock.calls.length;
			expect(callback).toBe(1);
		});

## Methods (video 9)
- test methods on our classes => test coverage
- how to test 2 different types of methods that you might write in you class
	for example, we have a method for toggling the 'Get Posts' button in App component

## jest config
- npm init
- npm i @types/jest jest typescript ts-jest
- tsc --init => create tsconfig.json file
- create folder ./src/app/utils/vietnameseNonAccent.ts (search for convert to Vietnamese function)
- create file ./jest.config.js (or adding into package.json)
```json
	"jest": {
    "testMatch": [
      "**/?(*.)+(spec|test).[jt]s?(x)"
    ]
  },
```



## Husky (video 10) => run test with interactions with Git
npm i husky -D
```json package.json
"husky": {
    "hooks": {
      "pre-commit": "npm test",
      "pre-push": "CI=true npm test"
    }
  },
```
CI=true => allow watch mode

## common React testing patterns
https://legacy.reactjs.org/docs/testing-recipes.html


## testing libraries frameworks

https://dev.to/heroku/comparing-the-top-3-javascript-testing-frameworks-2cco

Mocha, Jest, and Jasmine are all popular frameworks with helpful communities and years of development. Overall, `Mocha` and `Jasmine` are stronger for testing the `back end` because they were initially built for Node applications; therefore, they have more back-end tools and documentation available than Jest. For the front end, your testing framework choice is usually influenced by your front-end framework. `Jasmine` is used more often with `Angular`, and `Jest` was created by Facebook to use with `React`.

- Jasmine (usually used for Angular apps, ReactTestUtils makes it easier to work with Jasmine on the front end. However, you'll need an understanding of the ReactTestUtils API.)
- Jest (built for React apps. Jest is also compatible with some of the testing specific libraries like Enzyme)
- Mocha (Mocha gives you a little more flexibility because it's commonly used for both front-end and back-end testing. You'll have to import several libraries, like `Chai`, to get it to work with React, it is the most commonly used assertion library used with Mocha. Once those dependencies are installed, it's similar to working with Jest.)

compare 3 of them
- Mocking Data
- Mocking Async Calls
- Mocking Rendered Components
