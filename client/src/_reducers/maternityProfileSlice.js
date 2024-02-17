import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  loading: false,
  error: null,
  response: '',
};

export const fetchAllMaternityProfile = createAsyncThunk(
  'data/fetchAllMaternityProfile',
  async () => {
    let data = [];
    await axios
      .get('http://localhost:5000/maternity-profile/fetchAll')
      .then((res) => {
        (data = res.data);
        console.log(data);
      })
      .catch((error) => error.message);
    return data;
  },
);

export const addMaternityProfile = createAsyncThunk(
  'data/addMaternityProfile',
  async (inputValues) => {
    // let data = []
    await axios.post('http://localhost:5000/maternity-profile/add', inputValues)
      .then((response) => response)
      .catch((error) => error.message);
  },
);

export const getMaternityProfileDetail = createAsyncThunk(
  'data/getMaternityProfileDetail',
  async (id, { rejectWithValue }) => {
    let data = [];
    await axios
      .get(`http://localhost:5000/maternity-profile/detail/${id}`)
      .then((res) => (data = res.data))
      .catch((error) => rejectWithValue(error.message));
    return data;
  },
);

export const deleteMaternityProfile = createAsyncThunk(
  'data/deleteMaternityProfile',
  async (id) => {
    let data = [];
    await axios.delete(`http://localhost:5000/maternity-profile/delete/${id}`)
      .then((response) => {
        data = response.data;
        console.log(response);
      })
      .catch((err) => console.log(err));
    return data;
  },
);

export const editMaternityProfile = createAsyncThunk(
  'data/editMaternityProfile',
  async (data) => {
    let result = [];
    await axios
      .put('http://localhost:5000/maternity-profile/edit', data)
      .then((response) => (result = response.data))
      .catch((error) => error);
    return result;
  },
);

const maternityProfileSlice = createSlice({
  name: 'maternity-profile',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllMaternityProfile.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(fetchAllMaternityProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });

    builder
      .addCase(getMaternityProfileDetail.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getMaternityProfileDetail.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getMaternityProfileDetail.rejected, (state, action) => {
        state.status = 'failed';
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(editMaternityProfile.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(editMaternityProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
    builder
      .addCase(addMaternityProfile.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(addMaternityProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });

    builder
      .addCase(deleteMaternityProfile.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(deleteMaternityProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
  },
});

export default maternityProfileSlice.reducer;
