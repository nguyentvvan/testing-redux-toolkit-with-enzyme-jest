import PropTypes from 'prop-types';
import './styles.scss';

export default function ListItem({title, desc}) {
	if (!title) {
		return null;
	}
	
	return (
		<div data-test="listItemComponent">
			<h2 data-test="componentTitle">
				{title}
			</h2>
			<div data-test="componentDesc">
				{desc}
			</div>
		</div>
	)
}

const propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};

ListItem.propTypes = propTypes;
