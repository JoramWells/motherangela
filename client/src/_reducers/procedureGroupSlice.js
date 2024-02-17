import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  loading: false,
  error: null,
  response: '',
};

export const getAllProcedureGroups = createAsyncThunk(
  'data/getAllProcedureGroups',
  async () => {
    let data = [];
    await axios
      .get('http://localhost:5000/procedure-group/fetchAll')
      .then((res) => (data = res.data))
      .catch((error) => error.message);
    return data;
  },
);

export const addProcedureGroup = createAsyncThunk(
  'data/addProcedureGroup',
  async (inputValues) => {
    // let data = []
    await axios.post('http://localhost:5000/procedure-group/add', inputValues)
      .then((response) => response)
      .catch((error) => error.message);
  },
);

export const getProcedureGroupDetail = createAsyncThunk(
  'data/getProcedureGroupDetail',
  async (id, { rejectWithValue }) => {
    let data = [];
    await axios
      .get(`http://localhost:5000/procedure-group/detail/${id}`)
      .then((res) => (data = res.data))
      .catch((error) => rejectWithValue(error.message));
    return data;
  },
);

export const editProcedureGroup = createAsyncThunk(
  'data/editProcedureGroup',
  async (data) => {
    let result = [];
    await axios
      .put('http://localhost:5000/procedure-group/edit', data)
      .then((response) => (result = response.data))
      .catch((error) => error);
    return result;
  },
);

const procedureGroupSlice = createSlice({
  name: 'procedure-group',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllProcedureGroups.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getAllProcedureGroups.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });

    builder
      .addCase(getProcedureGroupDetail.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getProcedureGroupDetail.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getProcedureGroupDetail.rejected, (state, action) => {
        state.status = 'failed';
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(editProcedureGroup.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(editProcedureGroup.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
    builder
      .addCase(addProcedureGroup.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(addProcedureGroup.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
  },
});

export default procedureGroupSlice.reducer;
