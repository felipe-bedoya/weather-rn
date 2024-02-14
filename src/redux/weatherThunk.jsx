import {createAsyncThunk} from "@reduxjs/toolkit";
import {getWeather} from "../api/weather";

export const getWeatherForLocation = createAsyncThunk('weather/get', async ({lat, lng}, _) => {
    const response = await getWeather(lat, lng);
    return response.data;
});
