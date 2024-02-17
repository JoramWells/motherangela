import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  loading: false,
  error: null,
  response: '',
};

export const fetchAllAdmissionDoctorBedAllocation = createAsyncThunk(
  'data/fetchAllAdmissionDoctorBedAllocation',
  async () => {
    let data = [];
    await axios
      .get('http://localhost:5000/bed-allocation/fetchAll')
      .then((res) => (data = res.data))
      .catch((error) => error.message);
    return data;
  },
);

export const addAdmissionDoctorBedAllocation = createAsyncThunk(
  'data/addAdmissionDoctorBedAllocation',
  async (inputValues) => {
    // let data = []
    await axios.post('http://localhost:5000/bed-allocation/add', inputValues)
      .then((response) => response)
      .catch((error) => error.message);
  },
);

export const getAdmissionDoctorBedAllocationDetail = createAsyncThunk(
  'data/getAdmissionDoctorBedAllocationDetail',
  async (id, { rejectWithValue }) => {
    let data = [];
    await axios
      .get(`http://localhost:5000/bed-allocation/detail/${id}`)
      .then((res) => (data = res.data))
      .catch((error) => rejectWithValue(error.message));
    return data;
  },
);

export const deleteDoctorAdmissionBedAllocation = createAsyncThunk(
  'data/deleteDoctorAdmissionBedAllocation',
  async (id) => {
    await axios.delete(`http://localhost:5000/bed-allocation/delete/${id}`)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  },
);

export const editDoctorAdmissionBedAllocation = createAsyncThunk(
  'data/editDoctorAdmissionBedAllocation',
  async (data) => {
    let result = [];
    await axios
      .put('http://localhost:5000/bed-allocation/edit', data)
      .then((response) => (result = response.data))
      .catch((error) => error);
    return result;
  },
);

const doctorAdmissionBedAllocationSlice = createSlice({
  name: 'doctorAdmissionBedAllocation',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllAdmissionDoctorBedAllocation.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(fetchAllAdmissionDoctorBedAllocation.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });

    builder
      .addCase(getAdmissionDoctorBedAllocationDetail.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getAdmissionDoctorBedAllocationDetail.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getAdmissionDoctorBedAllocationDetail.rejected, (state, action) => {
        state.status = 'failed';
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(editDoctorAdmissionBedAllocation.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(editDoctorAdmissionBedAllocation.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
    builder
      .addCase(addAdmissionDoctorBedAllocation.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(addAdmissionDoctorBedAllocation.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });

    builder
      .addCase(deleteDoctorAdmissionBedAllocation.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(deleteDoctorAdmissionBedAllocation.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
  },
});

export default doctorAdmissionBedAllocationSlice.reducer;
