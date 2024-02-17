import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  loading: false,
  error: null,
  response: '',
};

export const getAllPriceListItems = createAsyncThunk(
  'data/getAllPriceListItems',
  async () => {
    let data = [];
    await axios
      .get('http://localhost:5000/price-list-items/get-all-price-list-items')
      .then((res) => {
        (data = res.data);
        console.log(res);
      })
      .catch((error) => error.message);
    return data;
  },
);

export const getPriceListDetail = createAsyncThunk(
  'data/getPriceListDetail',
  async (id) => {
    let data = [];
    await axios
      .get(`http://localhost:5000/pricelists/pricelist-detail/${id}`)
      .then((res) => (data = res.data))
      .catch((error) => error.message);
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
      .addCase(getAllPriceListItems.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getAllPriceListItems.fulfilled, (state, action) => {
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
