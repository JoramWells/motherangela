import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  loading: false,
  error: null,
  response: '',
};

export const getAllGroupPrivileges = createAsyncThunk(
  'data/getAllGroupPrivileges',
  async () => {
    let data = [];
    await axios
      .get('http://localhost:5000/group-privileges/fetchAll')
      .then((res) => (data = res.data))
      .catch((error) => error.message);
    return data;
  },
);

export const getGroupPrivilegeDetail = createAsyncThunk(
  'data/getGroupPrivilegeDetail',
  async (id, { rejectWithValue }) => {
    let data = [];
    await axios
      .get(`http://localhost:5000/group-privileges/group-privileges-detail/${id}`)
      .then((res) => (data = res.data))
      .catch((error) => rejectWithValue(error.message));
    return data;
  },
);

export const editGroupPrivileges = createAsyncThunk(
  'data/editGroupPrivileges',
  async (data) => {
    let result = [];
    await axios
      .put('http://localhost:5000/group-privileges/edit-group-privileges', data)
      .then((response) => (result = response.data))
      .catch((error) => error);
    return result;
  },
);

const groupPrivilegesSlice = createSlice({
  name: 'groupPrivileges',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllGroupPrivileges.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getAllGroupPrivileges.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });

    builder
      .addCase(getGroupPrivilegeDetail.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getGroupPrivilegeDetail.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getGroupPrivilegeDetail.rejected, (state, action) => {
        state.status = 'failed';
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(editGroupPrivileges.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(editGroupPrivileges.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
  },
});

export default groupPrivilegesSlice.reducer;
