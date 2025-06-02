import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const sendContactForm = createAsyncThunk(
  "contact/send",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );
      return response.data.message;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message || "Something went wrong"
      );
    }
  }
);

// export const sendContactForm = createAsyncThunk(
//   "contact/send",
//   async (formData, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/contact",
//         formData
//       );
//       return response.data.message;
//     } catch (error) {
//       console.error("API error:", error.response?.data || error.message);
//       return rejectWithValue(
//         error.response?.data?.message || "Something went wrong"
//       );
//     }
//   }
// );

const contactSlice = createSlice({
  name: "contactForm",
  initialState: {
    status: "idle",
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendContactForm.pending, (state) => {
        state.status = "loading";
        state.success = false;
        state.error = null;
      })
      .addCase(sendContactForm.fulfilled, (state) => {
        state.status = "succeeded";
        state.success = true;
      })
      .addCase(sendContactForm.rejected, (state, action) => {
        state.status = "failed";
        state.success = false;
        state.error = action.payload;
      });
  },
});

export default contactSlice.reducer;
