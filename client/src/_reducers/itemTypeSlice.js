import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  loading: false,
  error: null,
  response: '',
};

// get all category
export const getAllItemTypes = createAsyncThunk(
  'data/getAllItemTypes',
  async () => {
    let data = [];
    await axios
      .get('http://localhost:5000/item-type/fetchAll')
      .then((res) => (data = res.data))
      .catch((error) => error.message);
    return data;
  },
);

export const addItemType = createAsyncThunk(
  'data/addItemType',
  async (inputValues) => {
    // let data = []
    await axios.post('http://localhost:5000/item-type/add', inputValues)
      .then((response) => response)
      .catch((error) => error.message);
  },
);

const itemTypeSlice = createSlice({
  name: 'itemType',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllItemTypes.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getAllItemTypes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
    builder
      .addCase(addItemType.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(addItemType.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
  },

});

export default itemTypeSlice.reducer;
