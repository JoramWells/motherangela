import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  loading: false,
  error: null,
  response: '',
};

// get all category
export const getAllPrivileges = createAsyncThunk(
  'data/getAllPrivileges',
  async () => {
    let data = [];
    await axios
      .get('http://localhost:5000/privileges/fetchAll')
      .then((res) => (data = res.data))
      .catch((error) => error.message);
    return data;
  },
);

export const addPrivileges = createAsyncThunk(
  'data/addPrivileges',
  async (inputValues) => {
    // let data = []
    await axios.post('http://localhost:5000/privileges/add', inputValues)
      .then((response) => response)
      .catch((error) => error.message);
  },
);

const privilegeSlice = createSlice({
  name: 'privileges',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllPrivileges.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getAllPrivileges.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
    builder
      .addCase(addPrivileges.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(addPrivileges.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
  },

});

export default privilegeSlice.reducer;
