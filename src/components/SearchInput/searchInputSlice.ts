import {createSlice} from "@reduxjs/toolkit";
import {onSearchInput} from "./searchInputThunks";
import {RootState} from "../../app/store";
import {fetchSerial} from "../../container/Shows/showsSlice";
import {GotSerial, NewShow} from "../../types";

export interface MainState {
  items: GotSerial[];
  gettingSerials: boolean;
  serial: NewShow;
}

const initialState: MainState = {
  items: [],
  gettingSerials: false,
  serial: {
    image: {
      medium: ''
    },
    language: '',
    name: '',
    rating: {
      average: 0,
    },
  }
}

export const searchInputSlice = createSlice({
  name: 'serials',
  initialState,
  reducers: {
    resetSerials: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(onSearchInput.pending, (state) => {
      state.gettingSerials = true;
    });
    builder.addCase(onSearchInput.fulfilled, (state, {payload: serials}) => {
      state.gettingSerials = false;
      state.items = serials;
    });
    builder.addCase(fetchSerial.pending, (state) => {
      state.gettingSerials = true;
    });
    builder.addCase(fetchSerial.fulfilled, (state, {payload: serial}) => {
      state.serial = serial;
      state.gettingSerials = false;
    })
  },
});

export const serialsReducer = searchInputSlice.reducer;
export const {resetSerials} = searchInputSlice.actions;
export const selectSerials = (state: RootState) => state.serials.items;
export const selectSerial = (state: RootState) => state.serials.serial;