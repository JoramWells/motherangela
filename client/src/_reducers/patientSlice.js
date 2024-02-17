import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  loading: false,
  error: null,
  response: '',
};

export const getAllPatients = createAsyncThunk(
  'data/getAllPatients',
  async () => {
    let data = [];
    await axios
      .get('http://localhost:5000/patient/fetchAll')
      .then((res) => (data = res.data))
      .catch((error) => error.message);
    return data;
  },
);

export const addPatients = createAsyncThunk(
  'data/addPatients',
  async (inputValues) => {
    // let data = []
    await axios.post('http://localhost:5000/patient/add', inputValues)
      .then((response) => response)
      .catch((error) => error.message);
  },
);

export const getPatientDetail = createAsyncThunk(
  'data/getPatientDetail',
  async (id, { rejectWithValue }) => {
    let data = [];
    await axios
      .get(`http://localhost:5000/patient/detail/${id}`)
      .then((res) => (data = res.data))
      .catch((error) => rejectWithValue(error.message));
    return data;
  },
);

export const deletePatient = createAsyncThunk(
  'data/deletePatient',
  async (id) => {
    await axios.delete(`http://localhost:5000/patient/delete/${id}`)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  },
);

export const editPatient = createAsyncThunk(
  'data/editPatient',
  async (data) => {
    let result = [];
    await axios
      .put('http://localhost:5000/patient/edit', data)
      .then((response) => (result = response.data))
      .catch((error) => error);
    return result;
  },
);

const patientSlice = createSlice({
  name: 'patient',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllPatients.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getAllPatients.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });

    builder
      .addCase(getPatientDetail.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getPatientDetail.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getPatientDetail.rejected, (state, action) => {
        state.status = 'failed';
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(editPatient.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(editPatient.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
    builder
      .addCase(addPatients.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(addPatients.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });

    builder
      .addCase(deletePatient.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(deletePatient.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
  },
});

export default patientSlice.reducer;
