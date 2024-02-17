import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  loading: false,
  error: null,
  response: '',
};

export const fetchAllMaternityAntenatalProfile = createAsyncThunk(
  'data/fetchAllMaternityAntenatalProfile',
  async () => {
    let data = [];
    await axios
      .get('http://localhost:5000/maternity-antenatal-profile/fetchAll')
      .then((res) => {
        (data = res.data);
        console.log(data);
      })
      .catch((error) => error.message);
    return data;
  },
);

export const addMaternityAntenatalProfile = createAsyncThunk(
  'data/addMaternityAntenatalProfile',
  async (inputValues) => {
    // let data = []
    await axios.post('http://localhost:5000/maternity-antenatal-profile/add', inputValues)
      .then((response) => response)
      .catch((error) => error.message);
  },
);

export const getMaternityAntenatalProfileDetail = createAsyncThunk(
  'data/getMaternityAntenatalProfileDetail',
  async (id, { rejectWithValue }) => {
    let data = [];
    await axios
      .get(`http://localhost:5000/maternity-antenatal-profile/detail/${id}`)
      .then((res) => (data = res.data))
      .catch((error) => rejectWithValue(error.message));
    return data;
  },
);

export const deleteMaternityAntenatalProfile = createAsyncThunk(
  'data/deleteMaternityAntenatalProfile',
  async (id) => {
    let data = [];
    await axios.delete(`http://localhost:5000/maternity-antenatal-profile/delete/${id}`)
      .then((response) => {
        data = response.data;
        console.log(response);
      })
      .catch((err) => console.log(err));
    return data;
  },
);

export const editMaternityAntenatalProfile = createAsyncThunk(
  'data/editMaternityAntenatalProfile',
  async (data) => {
    let result = [];
    await axios
      .put('http://localhost:5000/maternity-antenatal-profile/edit', data)
      .then((response) => (result = response.data))
      .catch((error) => error);
    return result;
  },
);

const maternityAntenatalProfileSlice = createSlice({
  name: 'maternity-antenatal-profile',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllMaternityAntenatalProfile.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(fetchAllMaternityAntenatalProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });

    builder
      .addCase(getMaternityAntenatalProfileDetail.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getMaternityAntenatalProfileDetail.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getMaternityAntenatalProfileDetail.rejected, (state, action) => {
        state.status = 'failed';
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(editMaternityAntenatalProfile.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(editMaternityAntenatalProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
    builder
      .addCase(addMaternityAntenatalProfile.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(addMaternityAntenatalProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });

    builder
      .addCase(deleteMaternityAntenatalProfile.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(deleteMaternityAntenatalProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
  },
});

export default maternityAntenatalProfileSlice.reducer;
