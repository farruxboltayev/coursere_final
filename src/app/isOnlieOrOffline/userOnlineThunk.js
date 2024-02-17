/* eslint-disable no-use-before-define */
/* eslint-disable no-shadow */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url } from "../BaseUrl";

// export const fetchProducts = createAsyncThunk(
//   "products/fetchProducts",
//   async () => {
//     try {
//       const res = await axios.get(
//         "https://strada-api-7qrob.ondigitalocean.app/api/v1/product"
//       );
//       return res.data;
//     } catch (err) {
//       return [];
//     }
//   }
// );

export const userOnlineOrOffline = createAsyncThunk(
  "user/online-or-offline",
  async function ({ onlineData }, { rejectWithValue, dispatch }) {
    try {
      console.log(onlineData);
      const response = await axios
        .post(`${base_url}/is-online-or-offline-user-information`, onlineData)
        .then((response) => {
          return console.log(response.data);
        })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Can't add task. Server error.");
          }
        });
      const userOnline = await response.json();
      dispatch(userOnlineInfo(userOnline));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const userInfoSlice = createSlice({
  name: "users-online-or-offline",
  initialState: { _uuid: "", status: "idle" },
  reducers: {},
  extraReducers(builder) {
    builder

      .addCase(userOnlineOrOffline.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(userOnlineOrOffline.fulfilled, (state, action) => {
        state.status = "success";
        state._uuid = action.payload.data;
      })
      .addCase(userOnlineOrOffline.rejected, (state, action) => {
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

export default userInfoSlice.reducer;

const { userOnlineInfo } = userInfoSlice.actions;
