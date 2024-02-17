import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  loading: false,
  error: null,
  response: '',
};

// get all category
export const getAllDrugs = createAsyncThunk(
  'data/getAllDrugs',
  async () => {
    let data = [];
    await axios
      .get('http://localhost:5000/drugs/fetchAll')
      .then((res) => (data = res.data))
      .catch((error) => error.message);
    return data;
  },
);

export const addDrugs = createAsyncThunk(
  'data/addDrugs',
  async (inputValues) => {
    // let data = []
    await axios.post('http://localhost:5000/drugs/add', inputValues)
      .then((response) => response)
      .catch((error) => error.message);
  },
);

const drugsSlice = createSlice({
  name: 'drugs',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllDrugs.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getAllDrugs.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
    builder
      .addCase(addDrugs.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(addDrugs.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
  },

});

export default drugsSlice.reducer;
