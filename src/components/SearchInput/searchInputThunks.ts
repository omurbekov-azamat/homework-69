import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";
import {GotApi, GotSerial} from "../../types";

export const onSearchInput = createAsyncThunk<GotSerial[], string>(
  'serials/search',
  async (args) => {
    const serialsResponse = await axiosApi.get<GotApi[]>(args);
    const newSerials: GotSerial[] = serialsResponse.data.map(item => {
      return {
        id: item.show.id,
        name: item.show.name,
        url: item.show.url
      };
    });
    return newSerials;
  }
);