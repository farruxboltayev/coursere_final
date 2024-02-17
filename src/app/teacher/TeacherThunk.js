import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url } from "../BaseUrl";

export const fetchTeacher = createAsyncThunk(
  "products/fetchTeacher",
  async () => {
    try {
      const res = await axios.get(`${base_url}/teacher`);
      return res.data;
    } catch (err) {
      return [];
    }
  }
);

const teacherSlice = createSlice({
  name: "users-online-or-offline",
  initialState: { _uuid: "", status: "idle" },
  reducers: {},
  extraReducers(builder) {
    builder

      .addCase(fetchTeacher.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTeacher.fulfilled, (state, action) => {
        state.status = "success";
        state._uuid = action.payload.data;
      })
      .addCase(fetchTeacher.rejected, (state, action) => {
        state.status = "fail";
      });
    //   .addCase(deleteProduct.pending, (state, action) => {
    //     state.status = "loading";
    //   })
    //   .addCase(deleteProduct.fulfilled, (state, action) => {
    //     state.status = "success";
    //     state.products.push(action.meta.arg);
    //   })
    //   .addCase(deleteProduct.rejected, (state, action) => {
    //     state.status = "fail";
    //   });
  },
});
