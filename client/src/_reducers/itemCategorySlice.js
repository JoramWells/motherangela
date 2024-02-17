import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  loading: false,
  error: null,
  response: '',
};

export const getAllItemCategories = createAsyncThunk(
  'data/getAllItemCategories',
  async () => {
    let data = [];
    await axios
      .get('http://localhost:5000/item-category/fetchAll')
      .then((res) => (data = res.data))
      .catch((error) => error.message);
    return data;
  },
);

export const addItemCategory = createAsyncThunk(
  'data/addItemCategory',
  async (inputValues) => {
    // let data = []
    await axios.post('http://localhost:5000/item-category/add', inputValues)
      .then((response) => response)
      .catch((error) => error.message);
  },
);

export const getItemCategoryDetail = createAsyncThunk(
  'data/getItemCategoryDetail',
  async (id, { rejectWithValue }) => {
    let data = [];
    await axios
      .get(`http://localhost:5000/item-category/detail/${id}`)
      .then((res) => (data = res.data))
      .catch((error) => rejectWithValue(error.message));
    return data;
  },
);

export const editItemCategory = createAsyncThunk(
  'data/editItemCategory',
  async (data) => {
    let result = [];
    await axios
      .put('http://localhost:5000/item-category/edit', data)
      .then((response) => (result = response.data))
      .catch((error) => error);
    return result;
  },
);

const itemCategorySlice = createSlice({
  name: 'itemCategory',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllItemCategories.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getAllItemCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });

    builder
      .addCase(getItemCategoryDetail.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getItemCategoryDetail.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getItemCategoryDetail.rejected, (state, action) => {
        state.status = 'failed';
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(editItemCategory.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(editItemCategory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
    builder
      .addCase(addItemCategory.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(addItemCategory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
  },
});

export default itemCategorySlice.reducer;
