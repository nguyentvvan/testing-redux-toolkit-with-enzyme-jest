import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		addPost: (state, action) => {
			state.push({
        ...action.payload
      })
		},
		addPosts: (state, action) => {
			state = state.concat(action.payload);
		},
		setPosts: (state, action) => {
			state = action.payload;
		},
	},
});

export const { setPosts, addPost } = postsSlice.actions;

export default postsSlice.reducer;