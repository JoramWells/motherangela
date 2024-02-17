import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  loading: false,
  error: null,
  response: '',
};

export const getUsers = createAsyncThunk(
  'data/getUsers',
  async () => {
    let data = [];
    await axios
      .get('http://localhost:5000/users/fetchAll')
      .then((res) => (data = res.data))
      .catch((error) => error.message);
    return data;
  },
);

export const getUserDetail = createAsyncThunk(
  'data/getUserDetail',
  async (id, { rejectWithValue }) => {
    let data = [];
    await axios
      .get(`http://localhost:5000/user/user-detail/${id}`)
      .then((res) => (data = res.data))
      .catch((error) => rejectWithValue(error.message));
    return data;
  },
);

export const editUser = createAsyncThunk(
  'data/editUser',
  async (data) => {
    let result = [];
    await axios
      .put('http://localhost:5000/user/edit-user', data)
      .then((response) => (result = response.data))
      .catch((error) => error);
    return result;
  },
);

const userSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });

    builder
      .addCase(getUserDetail.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getUserDetail.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getUserDetail.rejected, (state, action) => {
        state.status = 'failed';
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(editUser.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
  },
});

export default userSlice.reducer;
