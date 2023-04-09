import { connect } from 'react-redux';

import Header from './components/header';
import Headline from './components/headline';
import SharedButton from './components/button';
import ListItem from './components/listItem';

// import { fetchPosts as _fetchPosts } from './actions';
import { fetchPosts } from './actions';

import './app.scss';
import React, { useState } from 'react';

const tempArr = [{
  fName: 'Joe',
  lName: 'Bloggs',
  email: 'joebloggs@gmail.com',
  age: 24,
  onlineStatus: true
}];

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hideBtn: false,
    };
  }

  fetch() {
    
  }

  hideBtnToggle() {
    const { hideBtn } = this.state;
    this.setState({
      hideBtn: !hideBtn,
    });
  };

  exampleMethod_returnsAValue(number) {
    return number + 1;
  }

  render() {
    const { posts, fetchPosts } = this.props;
    const { hideBtn } = this.state;

    return (
      <div className="App" data-test="appComponent">
        <Header />
        <section className='main'>
          <Headline header='Headline' desc='Click the button to render posts!' tempArr={tempArr} />
          {!hideBtn && (
            <SharedButton
              buttonText='Get posts'
              emitEvent={() => {
                fetchPosts();
                this.hideBtnToggle();
              }}
            />
          )}
          {posts && posts.map((item, index) =>
            <ListItem
              key={index}
              title={item.title}
              desc={item.body}
            />
          )}
        </section>
      </div>
    );
  }
}

// function App({fetchPosts, posts}) {
//   const [hideBtn, setHideBtn] = useState(false);

//   const hideBtnToggle = () => {
//     setHideBtn(!hideBtn);
//   };

//   return (
//     <div className="App" data-test="appComponent">
//       <Header />
//       <section className='main'>
//         <Headline header='Headline' desc='Click the button to render posts!' tempArr={tempArr} />
//         {!hideBtn && (
//           <SharedButton
//             buttonText='Get posts'
//             emitEvent={() => {
//               fetchPosts();
//               hideBtnToggle();
//             }}
//           />
//         )}
//         {posts && posts.map((item, index) =>
//           <ListItem
//             key={index}
//             title={item.title}
//             desc={item.body}
//           />
//         )}
//       </section>
//     </div>
//   );
// }

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  };
};

// const mapDispatchToProps = dispatch => ({
//   fetchPosts: (payload) => dispatch(_fetchPosts(payload)),
// });

export default connect(mapStateToProps, {fetchPosts})(App);
