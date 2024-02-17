import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  loading: false,
  error: null,
  response: '',
};

export const getAllMiscellaneousCharges = createAsyncThunk(
  'data/getAllMiscellaneousCharges',
  async () => {
    let data = [];
    await axios
      .get('http://localhost:5000/adm-miscellaneous-charge/fetchAll')
      .then((res) => (data = res.data))
      .catch((error) => error.message);
    return data;
  },
);

export const addMiscellaneousCharges = createAsyncThunk(
  'data/addMiscellaneousCharges',
  async (inputValues) => {
    // let data = []
    await axios.post('http://localhost:5000/adm-miscellaneous-charge/add', inputValues)
      .then((response) => response)
      .catch((error) => error.message);
  },
);

export const getMiscellaneousChargesDetail = createAsyncThunk(
  'data/getMiscellaneousChargesDetail',
  async (id, { rejectWithValue }) => {
    let data = [];
    await axios
      .get(`http://localhost:5000/adm-miscellaneous-charge/detail/${id}`)
      .then((res) => (data = res.data))
      .catch((error) => rejectWithValue(error.message));
    return data;
  },
);

export const deleteMiscellaneousCharges = createAsyncThunk(
  'data/deleteMiscellaneousCharges',
  async (id) => {
    await axios.delete(`http://localhost:5000/adm-miscellaneous-charge/delete/${id}`)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  },
);

export const editMiscellaneousCharges = createAsyncThunk(
  'data/editMiscellaneousCharges',
  async (data) => {
    let result = [];
    await axios
      .put('http://localhost:5000/adm-miscellaneous-charge/edit', data)
      .then((response) => (result = response.data))
      .catch((error) => error);
    return result;
  },
);

const admMiscellaneousChargesSlice = createSlice({
  name: 'maternity-service',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllMiscellaneousCharges.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getAllMiscellaneousCharges.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });

    builder
      .addCase(getMiscellaneousChargesDetail.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getMiscellaneousChargesDetail.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getMiscellaneousChargesDetail.rejected, (state, action) => {
        state.status = 'failed';
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(editMiscellaneousCharges.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(editMiscellaneousCharges.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
    builder
      .addCase(addMiscellaneousCharges.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(addMiscellaneousCharges.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });

    builder
      .addCase(deleteMiscellaneousCharges.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(deleteMiscellaneousCharges.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
  },
});

export default admMiscellaneousChargesSlice.reducer;
