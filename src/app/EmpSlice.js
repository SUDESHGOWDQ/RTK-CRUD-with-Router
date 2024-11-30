import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const Api_url = "http://localhost:8000/emp";

// Fetch posts
export const fetchPost = createAsyncThunk("emp/fetchPost", async () => {
  const response = await axios.get(Api_url);
  return response.data;
});

// Add new post
export const addPost = createAsyncThunk("emp/addPost", async (newData) => {
  const response = await axios.post(Api_url, newData);
  return response.data;
});

// Delete a post
export const deletePost = createAsyncThunk("emp/deletePost", async (id) => {
  const response = await axios.delete(`${Api_url}/${id}`);
  return id;
});

// Edit a post
export const editPost = createAsyncThunk(
  "emp/editPost",
  async ({ id, newData }) => {
    const response = await axios.put(`${Api_url}/${id}`, newData);
    return response.data;
  }
);

const initialState = {
  emp: [],
};

const empSlice = createSlice({
  name: "emp",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.emp = action.payload;
    });
    builder.addCase(addPost.fulfilled, (state, action) => {
      state.emp.push(action.payload);
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.emp = state.emp.filter((item) => item.id !== action.payload);
    });
    builder.addCase(editPost.fulfilled, (state, action) => {
      const index = state.emp.findIndex(
        (post) => post.id === action.payload.id
      );
      if (index !== -1) {
        state.emp[index] = action.payload;
      }
    });
  },
});

export default empSlice.reducer;
