import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  loading: false,
  error: null,
  response: '',
  status: '',
};

// get all category
export const getAllPhysioItem = createAsyncThunk(
  'data/getAllPhysioItem',
  async () => {
    let data = [];
    await axios
      .get('http://localhost:5000/physiotherapy/fetchAll')
      .then((res) => (data = res.data))
      .catch((error) => error.message);
    return data;
  },
);

export const addPhysioItem = createAsyncThunk(
  'data/addPhysioItem',
  async (inputValues) => {
    // let data = []
    await axios
      .post('http://localhost:5000/physiotherapy/add', inputValues)
      .then((response) => response)
      .catch((error) => error.message);
  },
);

// get by id
export const getPhysioItemDetail = createAsyncThunk(
  'data/getPhysioItemDetail',
  async (id) => {
    let data = [];
    await axios
      .get(`http://localhost:5000/physiotherapy/physiotherapy-detail/${id}`)
      .then((res) => (data = res.data))
      .catch((error) => error.message);
    return data;
  },
);

const physioItemSlice = createSlice({
  name: 'physio-item',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllPhysioItem.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getAllPhysioItem.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
    builder
      .addCase(getPhysioItemDetail.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getPhysioItemDetail.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });

    builder
      .addCase(addPhysioItem.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(addPhysioItem.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(addPhysioItem.rejected, (state, action) => {
        state.status = 'failed';
        state.data = action.payload;
        state.loading = false;
      });
  },

});

export default physioItemSlice.reducer;
