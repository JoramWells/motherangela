import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  loading: false,
  error: null,
  response: '',
};

export const getPharmaceuticalItems = createAsyncThunk(
  'data/getPharmaceuticalItems',
  async () => {
    let data = [];
    await axios
      .get('http://localhost:5000/pharmaceutical/fetchAll')
      .then((res) => {
        (data = res.data);
      })
      .catch((error) => error.message);
    return data;
  },
);

export const getPharmaceuticalItemDetails = createAsyncThunk(
  'data/getPharmaceuticalItemDetails',
  async (id) => {
    let data = [];
    await axios
      .get(`http://localhost:5000/pharmaceutical/pharmaceutical-item-detail/${id}`)
      .then((res) => (data = res.data))
      .catch((error) => error.message);
    return data;
  },
);

export const editPharmaceuticalItem = createAsyncThunk(
  'data/editPharmaceuticalItem',
  async (data) => {
    let result = [];
    await axios
      .put('http://localhost:5000/pharmaceutical/edit-pharmaceutical-item', data)
      .then((response) => (result = response.data))
      .catch((error) => error);
    return result;
  },
);

const pharmaceuticalItemSlice = createSlice({
  name: 'pharmaceuticalItem',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getPharmaceuticalItems.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getPharmaceuticalItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });

    builder
      .addCase(getPharmaceuticalItemDetails.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getPharmaceuticalItemDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });

    builder
      .addCase(editPharmaceuticalItem.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(editPharmaceuticalItem.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
  },
});

export default pharmaceuticalItemSlice.reducer;
