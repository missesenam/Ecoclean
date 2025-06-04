import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to send booking form
export const sendBookingForm = createAsyncThunk(
  "booking/send",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/booking", // Replace with production URL later
        formData
        // {
        //   headers: {
        //     "Content-Type": "multipart/form-data",
        //   },
        // }
      );
      return response.data.message;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Something went wrong"
      );
    }
  }
);

const bookingSlice = createSlice({
  name: "bookingForm",
  initialState: {
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    success: false,
  },
  reducers: {
    resetBookingState: (state) => {
      state.status = "idle";
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendBookingForm.pending, (state) => {
        state.status = "loading";
        state.error = null;
        state.success = false;
      })
      .addCase(sendBookingForm.fulfilled, (state) => {
        state.status = "succeeded";
        state.success = true;
        state.error = null;
      })
      .addCase(sendBookingForm.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        state.success = false;
      });
  },
});

export const { resetBookingState } = bookingSlice.actions;
export default bookingSlice.reducer;
