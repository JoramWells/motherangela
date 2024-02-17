import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  loading: false,
  error: null,
  response: '',
};

// get all category
export const getAllDepartments = createAsyncThunk(
  'data/getAllDepartments',
  async () => {
    let data = [];
    await axios
      .get('http://localhost:5000/departments/fetchAll')
      .then((res) => (data = res.data))
      .catch((error) => error.message);
    return data;
  },
);

export const addDepartment = createAsyncThunk(
  'data/addDepartment',
  async (inputValues) => {
    // let data = []
    await axios
      .post('http://localhost:5000/departments/add', inputValues)
      .then((response) => response)
      .catch((error) => error.message);
  },
);

// get by id
export const getDepartmentDetail = createAsyncThunk(
  'data/getDepartmentDetail',
  async (id) => {
    let data = [];
    await axios
      .get(`http://localhost:5000/departments/department-detail/${id}`)
      .then((res) => (data = res.data))
      .catch((error) => error.message);
    return data;
  },
);

const departmentSlice = createSlice({
  name: 'department',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllDepartments.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getAllDepartments.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
    builder
      .addCase(getDepartmentDetail.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getDepartmentDetail.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });

    builder
      .addCase(addDepartment.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(addDepartment.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
  },

});

export default departmentSlice.reducer;
