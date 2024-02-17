import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  loading: false,
  error: null,
  response: '',
};

export const getAllPriceLists = createAsyncThunk(
  'data/getAllPriceLists',
  async () => {
    let data = [];
    await axios
      .get('http://localhost:5000/pricelists/get-all-pricelists')
      .then((res) => (data = res.data))
      .catch((error) => error.message);
    return data;
  },
);

export const getPriceListDetail = createAsyncThunk(
  'data/getPriceListDetail',
  async (id, { rejectWithValue }) => {
    let data = [];
    await axios
      .get(`http://localhost:5000/pricelists/pricelist-detail/${id}`)
      .then((res) => (data = res.data))
      .catch((error) => rejectWithValue(error.message));
    return data;
  },
);

export const editPriceList = createAsyncThunk(
  'data/editPriceList',
  async (data) => {
    let result = [];
    await axios
      .put('http://localhost:5000/pricelists/edit-pricelist', data)
      .then((response) => (result = response.data))
      .catch((error) => error);
    return result;
  },
);

const priceListSlice = createSlice({
  name: 'priceLists',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllPriceLists.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getAllPriceLists.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });

    builder
      .addCase(getPriceListDetail.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getPriceListDetail.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getPriceListDetail.rejected, (state, action) => {
        state.status = 'failed';
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(editPriceList.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(editPriceList.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
  },
});

export default priceListSlice.reducer;
