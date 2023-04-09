import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import userAPI from '../../api/userAPI';

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
	const response = await axios.get('http://localhost:3001/user');
	// console.log(response.data);
	return response.data;
	// const response = await userAPI.fetchUser();
	// return response;
});

const initialState = {
	name: 'Default',
	status: 'idle',
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchUser.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
			return {
				status: 'complete',
				...action.payload,
			};
    });
		builder.addCase(fetchUser.rejected, (state, action) => {
      state.status = 'undefined';
      state.name = action.payload;
    });
	},
});

export const selectUserName = state => state.user.name;
export const selectUserFetchStatus = state => state.user.status;

export default userSlice.reducer;