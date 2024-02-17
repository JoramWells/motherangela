import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  loading: false,
  error: null,
  response: '',
};

export const getAllRadiologyRequests = createAsyncThunk(
  'data/getAllRadiologyRequests',
  async () => {
    let data = [];
    await axios
      .get('http://localhost:5000/radiology/fetchAll')
      .then((res) => (data = res.data))
      .catch((error) => error.message);
    return data;
  },
);

export const addRadiologyRequest = createAsyncThunk(
  'data/addRadiologyRequest',
  async (inputValues) => {
    // let data = []
    await axios.post('http://localhost:5000/radiology/add', inputValues)
      .then((response) => response)
      .catch((error) => error.message);
  },
);

export const getRadiologyRequestDetail = createAsyncThunk(
  'data/getRadiologyRequestDetail',
  async (id, { rejectWithValue }) => {
    let data = [];
    await axios
      .get(`http://localhost:5000/radiology/detail/${id}`)
      .then((res) => (data = res.data))
      .catch((error) => rejectWithValue(error.message));
    return data;
  },
);

export const editRadiologyRequest = createAsyncThunk(
  'data/editRadiologyRequest',
  async (data) => {
    let result = [];
    await axios
      .put('http://localhost:5000/radiology/edit', data)
      .then((response) => (result = response.data))
      .catch((error) => error);
    return result;
  },
);

const radiologySlice = createSlice({
  name: 'radiology',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllRadiologyRequests.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getAllRadiologyRequests.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });

    builder
      .addCase(getRadiologyRequestDetail.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getRadiologyRequestDetail.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getRadiologyRequestDetail.rejected, (state, action) => {
        state.status = 'failed';
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(editRadiologyRequest.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(editRadiologyRequest.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
    builder
      .addCase(addRadiologyRequest.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(addRadiologyRequest.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
  },
});

export default radiologySlice.reducer;
