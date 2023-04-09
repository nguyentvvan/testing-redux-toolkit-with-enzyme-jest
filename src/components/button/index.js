import PropTypes from 'prop-types';
import './styles.scss';

export default function SharedButton({buttonText, emitEvent}) {
	
	const submitEvent = () => {
		if (emitEvent) {
			emitEvent();
		}
	};
	
	return (
		<button
			type='button'
			data-test='buttonComponent'
			onClick={submitEvent}
		>
			{buttonText}
		</button>
	)
};

const propTypes = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func,
};

SharedButton.propTypes = propTypes;

