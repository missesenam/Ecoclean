import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "../slices/contactSlice";
import bookingReducer from "../slices/bookingSlice";

export const store = configureStore({
  reducer: {
    contactForm: contactReducer,
    bookingForm: bookingReducer,
  },
});
