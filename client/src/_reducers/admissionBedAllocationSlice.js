import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  loading: false,
  error: null,
  response: '',
};

export const fetchAllBedAllocation = createAsyncThunk(
  'data/fetchAllBedAllocation',
  async () => {
    let data = [];
    await axios
      .get('http://localhost:5000/bed-allocation/fetchAll')
      .then((res) => (data = res.data))
      .catch((error) => error.message);
    return data;
  },
);

export const addBedAllocation = createAsyncThunk(
  'data/addBedAllocation',
  async (inputValues) => {
    // let data = []
    await axios.post('http://localhost:5000/bed-allocation/add', inputValues)
      .then((response) => response)
      .catch((error) => error.message);
  },
);

export const getBedAllocation = createAsyncThunk(
  'data/getBedAllocation',
  async (id, { rejectWithValue }) => {
    let data = [];
    await axios
      .get(`http://localhost:5000/bed-allocation/detail/${id}`)
      .then((res) => (data = res.data))
      .catch((error) => rejectWithValue(error.message));
    return data;
  },
);

export const deleteBedAllocation = createAsyncThunk(
  'data/deleteBedAllocation',
  async (id) => {
    await axios.delete(`http://localhost:5000/bed-allocation/delete/${id}`)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  },
);

export const editBedAllocation = createAsyncThunk(
  'data/editBedAllocation',
  async (data) => {
    let result = [];
    await axios
      .put('http://localhost:5000/bed-allocation/edit', data)
      .then((response) => (result = response.data))
      .catch((error) => error);
    return result;
  },
);

const bedAllocationSlice = createSlice({
  name: 'bedAllocation',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllBedAllocation.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(fetchAllBedAllocation.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });

    builder
      .addCase(getBedAllocation.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getBedAllocation.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getBedAllocation.rejected, (state, action) => {
        state.status = 'failed';
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(editBedAllocation.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(editBedAllocation.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
    builder
      .addCase(addBedAllocation.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(addBedAllocation.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });

    builder
      .addCase(deleteBedAllocation.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(deleteBedAllocation.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
  },
});

export default bedAllocationSlice.reducer;
