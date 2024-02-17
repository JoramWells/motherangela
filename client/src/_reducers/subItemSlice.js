import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  loading: false,
  error: null,
  response: '',
};

export const addSubItem = createAsyncThunk(
  'data/addItemType',
  async (inputValues) => {
    // let data = []
    await axios
      .post('http://localhost:5000/subItem/add', inputValues)
      .then((response) => response)
      .catch((error) => error.message);
  },
);

// get all category
export const getAllSubItems = createAsyncThunk(
  'data/getAllPriceLists',
  async () => {
    let data = [];
    await axios
      .get('http://localhost:5000/subItem/fetchAll')
      .then((res) => (data = res.data))
      .catch((error) => error.message);
    return data;
  },
);

const subItemSlice = createSlice({
  name: 'subItem',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addSubItem.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(addSubItem.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
    builder
      .addCase(getAllSubItems.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getAllSubItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
  },
});

export default subItemSlice.reducer;
