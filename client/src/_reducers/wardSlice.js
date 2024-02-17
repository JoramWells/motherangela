import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  loading: false,
  error: null,
  response: '',
};

export const addWard = createAsyncThunk(
  'data/addWard',
  async (inputValues) => {
    // let data = []
    await axios.post('http://localhost:5000/wards/add', inputValues)
      .then((response) => response)
      .catch((error) => error.message);
  },
);

export const getAllWards = createAsyncThunk(
  'data/getAllWards',
  async () => {
    let data = [];
    await axios
      .get('http://localhost:5000/wards/fetchAll')
      .then((res) => (data = res.data))
      .catch((error) => error.message);
    return data;
  },
);

export const getWardDetail = createAsyncThunk(
  'data/getWardDetail',
  async (id, { rejectWithValue }) => {
    let data = [];
    await axios
      .get(`http://localhost:5000/wards/detail/${id}`)
      .then((res) => (data = res.data))
      .catch((error) => rejectWithValue(error.message));
    return data;
  },
);

export const editWard = createAsyncThunk(
  'data/editWard',
  async (data) => {
    let result = [];
    await axios
      .put('http://localhost:5000/wards/edit', data)
      .then((response) => (result = response.data))
      .catch((error) => error);
    return result;
  },
);

const wardSlice = createSlice({
  name: 'wards',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllWards.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getAllWards.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });

    builder
      .addCase(getWardDetail.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getWardDetail.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getWardDetail.rejected, (state, action) => {
        state.status = 'failed';
        state.loading = false;
        state.error = action.error.message;
      });
    builder
      .addCase(addWard.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(addWard.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });

    builder
      .addCase(editWard.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(editWard.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
  },
});

export default wardSlice.reducer;
