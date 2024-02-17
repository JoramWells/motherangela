import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  loading: false,
  error: null,
  response: '',
};

export const fetchAllAdmissionType = createAsyncThunk(
  'data/fetchAllAdmissionType',
  async () => {
    let data = [];
    await axios
      .get('http://localhost:5000/admission-type/fetchAll')
      .then((res) => (data = res.data))
      .catch((error) => error.message);
    return data;
  },
);

export const addAdmissionType = createAsyncThunk(
  'data/addAdmissionType',
  async (inputValues) => {
    // let data = []
    await axios.post('http://localhost:5000/admission-type/add', inputValues)
      .then((response) => response)
      .catch((error) => error.message);
  },
);

export const getAdmissionType = createAsyncThunk(
  'data/getAdmissionType',
  async (id, { rejectWithValue }) => {
    let data = [];
    await axios
      .get(`http://localhost:5000/admission-type/detail/${id}`)
      .then((res) => (data = res.data))
      .catch((error) => rejectWithValue(error.message));
    return data;
  },
);

export const deleteAdmissionType = createAsyncThunk(
  'data/deleteAdmissionType',
  async (id) => {
    await axios.delete(`http://localhost:5000/admission-type/delete/${id}`)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  },
);

export const editAdmissionType = createAsyncThunk(
  'data/editAdmissionType',
  async (data) => {
    let result = [];
    await axios
      .put('http://localhost:5000/admission-type/edit', data)
      .then((response) => (result = response.data))
      .catch((error) => error);
    return result;
  },
);

const admissionTypeSlice = createSlice({
  name: 'admissionType',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllAdmissionType.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(fetchAllAdmissionType.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });

    builder
      .addCase(getAdmissionType.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getAdmissionType.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getAdmissionType.rejected, (state, action) => {
        state.status = 'failed';
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(editAdmissionType.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(editAdmissionType.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
    builder
      .addCase(addAdmissionType.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(addAdmissionType.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });

    builder
      .addCase(deleteAdmissionType.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(deleteAdmissionType.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
  },
});

export default admissionTypeSlice.reducer;
