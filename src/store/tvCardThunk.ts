import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {NewShow} from "../types";

export const fetchSerial = createAsyncThunk<NewShow, string>(
  'serials/fetch',
  async (arg) => {

    const movieResponse = await axios.get<NewShow>('https://api.tvmaze.com/shows/' + arg);

    return {
      image: movieResponse.data.image,
      language: movieResponse.data.language,
      name: movieResponse.data.name,
      rating: movieResponse.data.rating,
      premiered: movieResponse.data.premiered,
      averageRuntime: movieResponse.data.averageRuntime,
      status: movieResponse.data.status,
      runtime: movieResponse.data.runtime,
      url: movieResponse.data.url,
    }
  }
);