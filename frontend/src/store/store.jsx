import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "../slices/contactSlice";

export const store = configureStore({
  reducer: {
    contactForm: contactReducer,
    // other reducers...
  },
});
