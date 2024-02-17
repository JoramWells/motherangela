import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  loading: false,
  error: null,
  response: '',
};

export const fetchAllOutPatientServicesCH = createAsyncThunk(
  'data/fetchAllOutPatientServicesCH',
  async () => {
    let data = [];
    await axios
      .get('http://localhost:5000/out-patient-services-ch/fetchAll')
      .then((res) => (data = res.data))
      .catch((error) => error.message);
    return data;
  },
);

export const addOutPatientServicesCH = createAsyncThunk(
  'data/addOutPatientServicesCH',
  async (inputValues) => {
    // let data = []
    await axios.post('http://localhost:5000/out-patient-services-ch/add', inputValues)
      .then((response) => response)
      .catch((error) => error.message);
  },
);

export const getOutPatientServicesCH = createAsyncThunk(
  'data/getOutPatientServicesCH',
  async (id, { rejectWithValue }) => {
    let data = [];
    await axios
      .get(`http://localhost:5000/out-patient-services-ch/detail/${id}`)
      .then((res) => (data = res.data))
      .catch((error) => rejectWithValue(error.message));
    return data;
  },
);

export const deleteOutPatientServicesCH = createAsyncThunk(
  'data/deleteOutPatientServicesCH',
  async (id) => {
    await axios.delete(`http://localhost:5000/out-patient-services-ch/delete/${id}`)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  },
);

export const editOutPatientServicesCH = createAsyncThunk(
  'data/editOutPatientServicesCH',
  async (data) => {
    let result = [];
    await axios
      .put('http://localhost:5000/out-patient-services-ch/edit', data)
      .then((response) => (result = response.data))
      .catch((error) => error);
    return result;
  },
);

const outPatientServicesCHSlice = createSlice({
  name: 'OutPatientServicesCH',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllOutPatientServicesCH.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(fetchAllOutPatientServicesCH.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });

    builder
      .addCase(getOutPatientServicesCH.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getOutPatientServicesCH.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getOutPatientServicesCH.rejected, (state, action) => {
        state.status = 'failed';
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(editOutPatientServicesCH.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(editOutPatientServicesCH.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
    builder
      .addCase(addOutPatientServicesCH.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(addOutPatientServicesCH.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });

    builder
      .addCase(deleteOutPatientServicesCH.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(deleteOutPatientServicesCH.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
  },
});

export default outPatientServicesCHSlice.reducer;
