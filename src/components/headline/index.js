import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addPosts } from '../../features/posts/postsSlice';
import { fetchUser } from '../../features/user/userSlice';

export default function Headline({header, desc, tempArr}) {
	// const dispatch = useDispatch();
	
	if (!header) {
		return null;
	}
	
	return (
		<div data-test='headlineComponent'>
			<h1 data-test='header'>{header}</h1>
			<p data-test='description'>{desc}</p>
			{/* <button
				type='button'
				onClick={() => {
					// dispatch(addPosts([
					// 	{title: 'new'}, 
					// 	{title: 'new 1'}
					// ]));
				}}
			>
				Click to fetch user
			</button> */}
		</div>
	)
}

const propTypes = {
  header: PropTypes.string,
  desc: PropTypes.string,
	tempArr: PropTypes.arrayOf(PropTypes.shape({
		fName: PropTypes.string,
		lName: PropTypes.string,
		email: PropTypes.string,
		age: PropTypes.number,
		onlineStatus: PropTypes.bool
}))
};

Headline.propTypes = propTypes;
