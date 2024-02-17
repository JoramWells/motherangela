import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  loading: false,
  error: null,
  response: '',
};

export const fetchAllDoctorAdmission = createAsyncThunk(
  'data/fetchAllDoctorAdmission',
  async () => {
    let data = [];
    await axios
      .get('http://localhost:5000/doctor/fetchAll')
      .then((res) => (data = res.data))
      .catch((error) => error.message);
    return data;
  },
);

export const addDoctorAdmission = createAsyncThunk(
  'data/addDoctorAdmission',
  async (inputValues) => {
    // let data = []
    await axios.post('http://localhost:5000/doctor/add', inputValues)
      .then((response) => response)
      .catch((error) => error.message);
  },
);

export const getDoctorAdmissionDetail = createAsyncThunk(
  'data/getDoctorAdmissionDetail',
  async (id, { rejectWithValue }) => {
    let data = [];
    await axios
      .get(`http://localhost:5000/doctor/detail/${id}`)
      .then((res) => (data = res.data))
      .catch((error) => rejectWithValue(error.message));
    return data;
  },
);

export const deleteDoctorAdmission = createAsyncThunk(
  'data/deleteDoctorAdmission',
  async (id) => {
    await axios.delete(`http://localhost:5000/doctor/delete/${id}`)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  },
);

export const editDoctorAdmission = createAsyncThunk(
  'data/editDoctorAdmission',
  async (data) => {
    let result = [];
    await axios
      .put('http://localhost:5000/doctor/edit', data)
      .then((response) => (result = response.data))
      .catch((error) => error);
    return result;
  },
);

const doctorAdmissionSlice = createSlice({
  name: 'doctorAdmission',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllDoctorAdmission.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(fetchAllDoctorAdmission.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });

    builder
      .addCase(getDoctorAdmissionDetail.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getDoctorAdmissionDetail.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getDoctorAdmissionDetail.rejected, (state, action) => {
        state.status = 'failed';
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(editDoctorAdmission.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(editDoctorAdmission.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
    builder
      .addCase(addDoctorAdmission.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(addDoctorAdmission.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });

    builder
      .addCase(deleteDoctorAdmission.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(deleteDoctorAdmission.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
  },
});

export default doctorAdmissionSlice.reducer;
