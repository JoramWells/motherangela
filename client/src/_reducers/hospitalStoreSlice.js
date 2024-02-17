import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  loading: false,
  error: null,
  response: '',
};

export const fetchAllHospitalStores = createAsyncThunk(
  'data/fetchAllHospitalStores',
  async () => {
    let data = [];
    await axios
      .get('http://localhost:5000/hospital-store/fetchAll')
      .then((res) => {
        (data = res.data);
        console.log(data);
      })
      .catch((error) => error.message);
    return data;
  },
);

export const addHospitalStore = createAsyncThunk(
  'data/addHospitalStore',
  async (inputValues) => {
    // let data = []
    await axios.post('http://localhost:5000/hospital-store/add', inputValues)
      .then((response) => response)
      .catch((error) => error.message);
  },
);

export const getHospitalStoreDetail = createAsyncThunk(
  'data/getHospitalStoreDetail',
  async (id, { rejectWithValue }) => {
    let data = [];
    await axios
      .get(`http://localhost:5000/hospital-store/detail/${id}`)
      .then((res) => (data = res.data))
      .catch((error) => rejectWithValue(error.message));
    return data;
  },
);

export const deleteHospitalStore = createAsyncThunk(
  'data/deleteHospitalStore',
  async (id) => {
    let data = [];
    await axios.delete(`http://localhost:5000/hospital-store/delete/${id}`)
      .then((response) => {
        data = response.data;
        console.log(response);
      })
      .catch((err) => console.log(err));
    return data;
  },
);

export const editHospitalStore = createAsyncThunk(
  'data/editHospitalStore',
  async (data) => {
    let result = [];
    await axios
      .put('http://localhost:5000/hospital-store/edit', data)
      .then((response) => (result = response.data))
      .catch((error) => error);
    return result;
  },
);

const hospitalStoreSlice = createSlice({
  name: 'hospital-store',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllHospitalStores.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(fetchAllHospitalStores.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });

    builder
      .addCase(getHospitalStoreDetail.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getHospitalStoreDetail.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getHospitalStoreDetail.rejected, (state, action) => {
        state.status = 'failed';
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(editHospitalStore.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(editHospitalStore.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
    builder
      .addCase(addHospitalStore.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(addHospitalStore.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });

    builder
      .addCase(deleteHospitalStore.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(deleteHospitalStore.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
  },
});

export default hospitalStoreSlice.reducer;
