import {createSlice} from "@reduxjs/toolkit";
import {onSearchInput} from "./searchInputThunks";
import {RootState} from "../../app/store";
import {GotSerial} from "../../types";

export interface MainState {
  items: GotSerial[];
  gettingSerials: boolean;
}

const initialState: MainState = {
  items: [],
  gettingSerials: false,
}

export const searchInputSlice = createSlice({
  name: 'serials',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(onSearchInput.pending, (state,) => {
      state.gettingSerials = true;
    });
    builder.addCase(onSearchInput.fulfilled, (state, {payload: serials}) => {
      state.gettingSerials = false;
      state.items = serials;
    });
  },
});

export const serialsReducer = searchInputSlice.reducer;

export const selectSerials = (state: RootState) => state.serials.items;