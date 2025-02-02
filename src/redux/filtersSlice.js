import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const slice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    findContact: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const filtersReducer = slice.reducer;
export const { findContact } = slice.actions;

export const selectFilter = (state) => state.filter.name;
