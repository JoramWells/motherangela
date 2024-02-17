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
export const getAllInsurance = createAsyncThunk(
  'data/getAllInsurance',
  async () => {
    let data = [];
    await axios
      .get('http://localhost:5000/insurance/fetchAll')
      .then((res) => (data = res.data))
      .catch((error) => error.message);
    return data;
  },
);

export const addInsurance = createAsyncThunk(
  'data/addInsurance',
  async (inputValues) => {
    // let data = []
    await axios
      .post('http://localhost:5000/insurance/add', inputValues)
      .then((response) => response)
      .catch((error) => error.message);
  },
);

// get by id
export const getInsuranceDetail = createAsyncThunk(
  'data/getInsuranceDetail',
  async (id) => {
    let data = [];
    await axios
      .get(`http://localhost:5000/insurance/insurance-detail/${id}`)
      .then((res) => (data = res.data))
      .catch((error) => error.message);
    return data;
  },
);

const insuranceSlice = createSlice({
  name: 'insurance',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllInsurance.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getAllInsurance.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
    builder
      .addCase(getInsuranceDetail.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getInsuranceDetail.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });

    builder
      .addCase(addInsurance.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(addInsurance.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(addInsurance.rejected, (state, action) => {
        state.status = 'failed';
        state.data = action.payload;
        state.loading = false;
      });
  },

});

export default insuranceSlice.reducer;
