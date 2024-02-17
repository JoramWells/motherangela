import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  loading: false,
  error: null,
  response: '',
};

export const getAllSuppliers = createAsyncThunk(
  'data/getAllSuppliers',
  async () => {
    let data = [];
    await axios
      .get('http://localhost:5000/suppliers/fetchAll')
      .then((res) => (data = res.data))
      .catch((error) => error.message);
    return data;
  },
);

export const addSuppliers = createAsyncThunk(
  'data/addSuppliers',
  async (inputValues) => {
    // let data = []
    await axios.post('http://localhost:5000/suppliers/add', inputValues)
      .then((response) => response)
      .catch((error) => error.message);
  },
);

export const getSupplierDetail = createAsyncThunk(
  'data/getSupplierDetail',
  async (id, { rejectWithValue }) => {
    let data = [];
    await axios
      .get(`http://localhost:5000/suppliers/detail/${id}`)
      .then((res) => (data = res.data))
      .catch((error) => rejectWithValue(error.message));
    return data;
  },
);

export const deleteSupplier = createAsyncThunk(
  'data/deleteSupplier',
  async (id) => {
    await axios.delete(`http://localhost:5000/suppliers/delete/${id}`)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  },
);

export const editSuppliers = createAsyncThunk(
  'data/editSuppliers',
  async (data) => {
    let result = [];
    await axios
      .put('http://localhost:5000/suppliers/edit', data)
      .then((response) => (result = response.data))
      .catch((error) => error);
    return result;
  },
);

const supplierSlice = createSlice({
  name: 'suppliers',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllSuppliers.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getAllSuppliers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });

    builder
      .addCase(getSupplierDetail.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getSupplierDetail.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getSupplierDetail.rejected, (state, action) => {
        state.status = 'failed';
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(editSuppliers.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(editSuppliers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
    builder
      .addCase(addSuppliers.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(addSuppliers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });

    builder
      .addCase(deleteSupplier.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(deleteSupplier.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
  },
});

export default supplierSlice.reducer;
