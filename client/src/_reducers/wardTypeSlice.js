import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  loading: false,
  error: null,
  response: '',
};

export const addWardType = createAsyncThunk(
  'data/addWardType',
  async (inputValues) => {
    // let data = []
    await axios.post('http://localhost:5000/ward-type/add', inputValues)
      .then((response) => response)
      .catch((error) => error.message);
  },
);

export const getAllWardTypes = createAsyncThunk(
  'data/getAllWardTypes',
  async () => {
    let data = [];
    await axios
      .get('http://localhost:5000/ward-type/fetchAll')
      .then((res) => (data = res.data))
      .catch((error) => error.message);
    return data;
  },
);

export const getWardTypeDetail = createAsyncThunk(
  'data/getWardTypeDetail',
  async (id, { rejectWithValue }) => {
    let data = [];
    await axios
      .get(`http://localhost:5000/ward-type/detail/${id}`)
      .then((res) => (data = res.data))
      .catch((error) => rejectWithValue(error.message));
    return data;
  },
);

export const editWardType = createAsyncThunk(
  'data/editWardType',
  async (data) => {
    let result = [];
    await axios
      .put('http://localhost:5000/ward-type/edit', data)
      .then((response) => (result = response.data))
      .catch((error) => error);
    return result;
  },
);

const wardTypeSlice = createSlice({
  name: 'ward-type',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllWardTypes.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getAllWardTypes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });

    builder
      .addCase(getWardTypeDetail.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getWardTypeDetail.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getWardTypeDetail.rejected, (state, action) => {
        state.status = 'failed';
        state.loading = false;
        state.error = action.error.message;
      });
    builder
      .addCase(addWardType.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(addWardType.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });

    builder
      .addCase(editWardType.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(editWardType.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
  },
});

export default wardTypeSlice.reducer;
