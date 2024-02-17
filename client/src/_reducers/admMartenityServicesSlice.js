import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  loading: false,
  error: null,
  response: '',
};

export const getAllMaternityServices = createAsyncThunk(
  'data/getAllMaternityServices',
  async () => {
    let data = [];
    await axios
      .get('http://localhost:5000/adm-maternity-services/fetchAll')
      .then((res) => (data = res.data))
      .catch((error) => error.message);
    return data;
  },
);

export const addMaternityServices = createAsyncThunk(
  'data/addMaternityServices',
  async (inputValues) => {
    // let data = []
    await axios.post('http://localhost:5000/adm-maternity-services/add', inputValues)
      .then((response) => response)
      .catch((error) => error.message);
  },
);

export const getMaternityServiceDetail = createAsyncThunk(
  'data/getMaternityServiceDetail',
  async (id, { rejectWithValue }) => {
    let data = [];
    await axios
      .get(`http://localhost:5000/adm-maternity-services/detail/${id}`)
      .then((res) => (data = res.data))
      .catch((error) => rejectWithValue(error.message));
    return data;
  },
);

export const deleteMaternityService = createAsyncThunk(
  'data/deleteMaternityService',
  async (id) => {
    await axios.delete(`http://localhost:5000/adm-maternity-services/delete/${id}`)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  },
);

export const editMaternityService = createAsyncThunk(
  'data/editMaternityService',
  async (data) => {
    let result = [];
    await axios
      .put('http://localhost:5000/adm-maternity-services/edit', data)
      .then((response) => (result = response.data))
      .catch((error) => error);
    return result;
  },
);

const admMaternityServiceSlice = createSlice({
  name: 'maternity-service',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllMaternityServices.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getAllMaternityServices.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });

    builder
      .addCase(getMaternityServiceDetail.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getMaternityServiceDetail.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getMaternityServiceDetail.rejected, (state, action) => {
        state.status = 'failed';
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(editMaternityService.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(editMaternityService.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
    builder
      .addCase(addMaternityServices.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(addMaternityServices.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });

    builder
      .addCase(deleteMaternityService.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(deleteMaternityService.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
  },
});

export default admMaternityServiceSlice.reducer;
