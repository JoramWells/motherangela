import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
// import { useAdmissionQuery } from '../api/admission.api';

const initialState = {
  data: [],
  loading: false,
  error: null,
  response: '',
};

export const fetchAllAdmission = createAsyncThunk(
  'data/fetchAllAdmission',
  async () => {
    let data = [];
    await axios
      .get('http://localhost:5000/admission/fetchAll')
      .then((res) => {
        (data = res.data);
        console.log(data);
      })
      .catch((error) => error.message);
    return data;
  },
);

export const addAdmission = createAsyncThunk(
  'data/addAdmission',
  async (inputValues) => {
    // let data = []
    await axios.post('http://localhost:5000/admission/add', inputValues)
      .then((response) => response)
      .catch((error) => error.message);
  },
);

export const getAdmissionDetail = createAsyncThunk(
  'data/getAdmissionDetail',
  async (id, { rejectWithValue }) => {
    let data = [];
    await axios
      .get(`http://localhost:5000/admission/detail/${id}`)
      .then((res) => (data = res.data))
      .catch((error) => rejectWithValue(error.message));
    return data;
  },
);

export const deleteAdmission = createAsyncThunk(
  'data/deleteAdmission',
  async (id) => {
    let data = [];
    await axios.delete(`http://localhost:5000/admission/delete/${id}`)
      .then((response) => {
        data = response.data;
        console.log(response);
      })
      .catch((err) => console.log(err));
    return data;
  },
);

export const editAdmission = createAsyncThunk(
  'data/editAdmission',
  async (data) => {
    let result = [];
    await axios
      .put('http://localhost:5000/admission/edit', data)
      .then((response) => (result = response.data))
      .catch((error) => error);
    return result;
  },
);

const admissionSlice = createSlice({
  name: 'admission',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllAdmission.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(fetchAllAdmission.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });

    builder
      .addCase(getAdmissionDetail.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getAdmissionDetail.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getAdmissionDetail.rejected, (state, action) => {
        state.status = 'failed';
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(editAdmission.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(editAdmission.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
    builder
      .addCase(addAdmission.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(addAdmission.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });

    builder
      .addCase(deleteAdmission.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(deleteAdmission.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
  },
});

export default admissionSlice.reducer;
