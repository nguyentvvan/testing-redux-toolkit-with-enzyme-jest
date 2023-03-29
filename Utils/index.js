import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import checkPropTypes from 'check-prop-types';

export const findByTestAttr = (component, attr) => {
	const wrapper = component.find(`[data-test='${attr}']`);
	return wrapper;
};

export const checkProps = (component, expectedProps) => {
	const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
	return propsErr;
};

export function renderWithProviders(component, props) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }

	const store = configureStore({
		// reducer: {
		// 	user,
		// }
	});

  // return {store, shallow(ui, { wrapper: Wrapper })};
}