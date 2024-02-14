import {createAsyncThunk} from "@reduxjs/toolkit";
import {getCities} from "../api/cities";

export const getCitiesFromSlug = createAsyncThunk('city/get', async (query, _) => {
    const response = await getCities(query);
    return response.data;
});
