import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  loading: false,
  error: null,
  response: '',
};

export const getAllProcedures = createAsyncThunk(
  'data/getAllProcedures',
  async () => {
    let data = [];
    await axios
      .get('http://localhost:5000/procedures/fetchAll')
      .then((res) => (data = res.data))
      .catch((error) => error.message);
    return data;
  },
);

export const addProcedures = createAsyncThunk(
  'data/addProcedures',
  async (inputValues) => {
    // let data = []
    await axios.post('http://localhost:5000/procedures/add', inputValues)
      .then((response) => response)
      .catch((error) => error.message);
  },
);

export const getProcedureDetail = createAsyncThunk(
  'data/getProcedureDetail',
  async (id, { rejectWithValue }) => {
    let data = [];
    await axios
      .get(`http://localhost:5000/procedures/detail/${id}`)
      .then((res) => (data = res.data))
      .catch((error) => rejectWithValue(error.message));
    return data;
  },
);

export const editProcedures = createAsyncThunk(
  'data/editProcedures',
  async (data) => {
    let result = [];
    await axios
      .put('http://localhost:5000/procedures/edit', data)
      .then((response) => (result = response.data))
      .catch((error) => error);
    return result;
  },
);

const proceduresSlice = createSlice({
  name: 'procedures',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllProcedures.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getAllProcedures.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });

    builder
      .addCase(getProcedureDetail.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getProcedureDetail.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getProcedureDetail.rejected, (state, action) => {
        state.status = 'failed';
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(editProcedures.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(editProcedures.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
    builder
      .addCase(addProcedures.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(addProcedures.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
  },
});

export default proceduresSlice.reducer;
