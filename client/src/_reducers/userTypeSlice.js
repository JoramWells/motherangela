import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  loading: false,
  error: null,
  response: '',
};
export const getUserTypes = createAsyncThunk(
  'data/getUserTypes',
  async () => {
    let data = [];
    await axios
      .get('http://localhost:5000/user-type/fetchAll')
      .then((res) => (data = res.data))
      .catch((error) => error.message);
    return data;
  },
);

export const getUserTypeDetail = createAsyncThunk(
  'data/getUserTypeDetail',
  async (id, { rejectWithValue }) => {
    let data = [];
    await axios
      .get(`http://localhost:5000/user-type/pricelist-detail/${id}`)
      .then((res) => (data = res.data))
      .catch((error) => rejectWithValue(error.message));
    return data;
  },
);

export const editUserType = createAsyncThunk(
  'data/editUserType',
  async (data) => {
    let result = [];
    await axios
      .put('http://localhost:5000/user-type/edit-pricelist', data)
      .then((response) => (result = response.data))
      .catch((error) => error);
    return result;
  },
);

export const addUserType = createAsyncThunk(
  'data/addUserType',
  async (inputValues) => {
    // let data = []
    await axios
      .post('http://localhost:5000/user-type/add', inputValues)
      .then((response) => response)
      .catch((error) => error.message);
  },
);

const userTypeSlice = createSlice({
  name: 'user-type',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addUserType.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(addUserType.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
    builder
      .addCase(getUserTypes.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getUserTypes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });

    builder
      .addCase(getUserTypeDetail.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getUserTypeDetail.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getUserTypeDetail.rejected, (state, action) => {
        state.status = 'failed';
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(editUserType.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(editUserType.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
  },
});

export default userTypeSlice.reducer;
