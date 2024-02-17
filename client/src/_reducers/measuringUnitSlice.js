import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  loading: false,
  error: null,
  response: '',
};

export const getAllMeasuringUnit = createAsyncThunk(
  'data/getAllMeasuringUnit',
  async () => {
    let data = [];
    await axios
      .get('http://localhost:5000/measuring-unit/fetchAll')
      .then((res) => (data = res.data))
      .catch((error) => error.message);
    return data;
  },
);

export const addMeasuringUnit = createAsyncThunk(
  'data/addMeasuringUnit',
  async (inputValues) => {
    // let data = []
    await axios.post('http://localhost:5000/measuring-unit/add', inputValues)
      .then((response) => response)
      .catch((error) => error.message);
  },
);

export const getMeasuringUnitDetail = createAsyncThunk(
  'data/getMeasuringUnitDetail',
  async (id, { rejectWithValue }) => {
    let data = [];
    await axios
      .get(`http://localhost:5000/measuring-unit/detail/${id}`)
      .then((res) => (data = res.data))
      .catch((error) => rejectWithValue(error.message));
    return data;
  },
);

export const editMeasuringUnit = createAsyncThunk(
  'data/editMeasuringUnit',
  async (data) => {
    let result = [];
    await axios
      .put('http://localhost:5000/measuring-unit/edit', data)
      .then((response) => (result = response.data))
      .catch((error) => error);
    return result;
  },
);

const measuringUnitSlice = createSlice({
  name: 'measuringUnit',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllMeasuringUnit.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getAllMeasuringUnit.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });

    builder
      .addCase(getMeasuringUnitDetail.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getMeasuringUnitDetail.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getMeasuringUnitDetail.rejected, (state, action) => {
        state.status = 'failed';
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(editMeasuringUnit.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(editMeasuringUnit.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
    builder
      .addCase(addMeasuringUnit.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(addMeasuringUnit.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
  },
});

export default measuringUnitSlice.reducer;
