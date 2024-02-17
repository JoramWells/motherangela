import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  loading: false,
  error: null,
  response: '',
};

export const getAllItems = createAsyncThunk(
  'data/getAllItems',
  async () => {
    let data = [];
    await axios
      .get('http://localhost:5000/items/fetchAll')
      .then((res) => (data = res.data))
      .catch((error) => error.message);
    return data;
  },
);

export const addItem = createAsyncThunk(
  'data/addItem',
  async (inputValues) => {
    // let data = []
    await axios.post('http://localhost:5000/item/add', inputValues)
      .then((response) => response)
      .catch((error) => error.message);
  },
);

export const getItemDetail = createAsyncThunk(
  'data/getItemDetail',
  async (id, { rejectWithValue }) => {
    let data = [];
    await axios
      .get(`http://localhost:5000/item/detail/${id}`)
      .then((res) => (data = res.data))
      .catch((error) => rejectWithValue(error.message));
    return data;
  },
);

export const editItem = createAsyncThunk(
  'data/editItem',
  async (data) => {
    let result = [];
    await axios
      .put('http://localhost:5000/item/edit', data)
      .then((response) => (result = response.data))
      .catch((error) => error);
    return result;
  },
);

const itemSlice = createSlice({
  name: 'item',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllItems.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getAllItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });

    builder
      .addCase(getItemDetail.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getItemDetail.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getItemDetail.rejected, (state, action) => {
        state.status = 'failed';
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(editItem.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(editItem.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
    builder
      .addCase(addItem.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(addItem.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
  },
});

export default itemSlice.reducer;
