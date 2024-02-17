import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  loading: false,
  error: null,
  response: '',
};

export const fetchAllAdmissionCategory = createAsyncThunk(
  'data/fetchAllAdmissionCategory',
  async () => {
    let data = [];
    await axios
      .get('http://localhost:5000/admission-category/fetchAll')
      .then((res) => (data = res.data))
      .catch((error) => error.message);
    return data;
  },
);

export const addAdmissionCategory = createAsyncThunk(
  'data/addAdmissionCategory',
  async (inputValues) => {
    // let data = []
    await axios.post('http://localhost:5000/admission-category/add', inputValues)
      .then((response) => response)
      .catch((error) => error.message);
  },
);

export const getAdmissionCategoryDetail = createAsyncThunk(
  'data/getAdmissionCategoryDetail',
  async (id, { rejectWithValue }) => {
    let data = [];
    await axios
      .get(`http://localhost:5000/admission-category/detail/${id}`)
      .then((res) => (data = res.data))
      .catch((error) => rejectWithValue(error.message));
    return data;
  },
);

export const deleteAdmissionCategory = createAsyncThunk(
  'data/deleteAdmissionCategory',
  async (id) => {
    await axios.delete(`http://localhost:5000/admission-category/delete/${id}`)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  },
);

export const editAdmissionCAtegory = createAsyncThunk(
  'data/editAdmissionCAtegory',
  async (data) => {
    let result = [];
    await axios
      .put('http://localhost:5000/admission-category/edit', data)
      .then((response) => (result = response.data))
      .catch((error) => error);
    return result;
  },
);

const admissionCategorySlice = createSlice({
  name: 'admissionCategory',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllAdmissionCategory.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(fetchAllAdmissionCategory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });

    builder
      .addCase(getAdmissionCategoryDetail.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getAdmissionCategoryDetail.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getAdmissionCategoryDetail.rejected, (state, action) => {
        state.status = 'failed';
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(editAdmissionCAtegory.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(editAdmissionCAtegory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
    builder
      .addCase(addAdmissionCategory.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(addAdmissionCategory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });

    builder
      .addCase(deleteAdmissionCategory.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(deleteAdmissionCategory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
  },
});

export default admissionCategorySlice.reducer;
