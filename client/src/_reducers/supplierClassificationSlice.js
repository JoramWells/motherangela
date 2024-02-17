import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  loading: false,
  error: null,
  response: '',
};

export const getAllSupplierClassification = createAsyncThunk(
  'data/getAllSupplierClassification',
  async () => {
    let data = [];
    await axios
      .get('http://localhost:5000/supplier-classification/fetchAll')
      .then((res) => (data = res.data))
      .catch((error) => error.message);
    return data;
  },
);

export const addSupplierClassification = createAsyncThunk(
  'data/addSupplierClassification',
  async (inputValues) => {
    // let data = []
    await axios.post('http://localhost:5000/supplier-classification/add', inputValues)
      .then((response) => response)
      .catch((error) => error.message);
  },
);

export const getClassificationSupplierDetail = createAsyncThunk(
  'data/getClassificationSupplierDetail',
  async (id, { rejectWithValue }) => {
    let data = [];
    await axios
      .get(`http://localhost:5000/supplier-classification/detail/${id}`)
      .then((res) => (data = res.data))
      .catch((error) => rejectWithValue(error.message));
    return data;
  },
);

export const editSupplierClassification = createAsyncThunk(
  'data/editSupplierClassification',
  async (data) => {
    let result = [];
    await axios
      .put('http://localhost:5000/supplier-classification/edit', data)
      .then((response) => (result = response.data))
      .catch((error) => error);
    return result;
  },
);

const supplierClassificationSlice = createSlice({
  name: 'supplier-classification',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllSupplierClassification.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getAllSupplierClassification.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });

    builder
      .addCase(getClassificationSupplierDetail.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getClassificationSupplierDetail.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getClassificationSupplierDetail.rejected, (state, action) => {
        state.status = 'failed';
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(editSupplierClassification.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(editSupplierClassification.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
    builder
      .addCase(addSupplierClassification.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(addSupplierClassification.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
  },
});

export default supplierClassificationSlice.reducer;
