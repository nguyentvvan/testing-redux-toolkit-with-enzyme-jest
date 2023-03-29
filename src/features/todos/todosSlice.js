import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

// const initialState = [{
// 	id: 0,
// 	text: 'Use Redux',
// 	completed: false,
// }];

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setPosts: (state, action) => {
			state.concat(action.payload);
		},
    todoAdded: (state, action) => {
      state.push({
        id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        completed: false,
        text: action.payload
      })
    },
  }
})

export const { todoAdded, setPosts } = todosSlice.actions;

export default todosSlice.reducer;