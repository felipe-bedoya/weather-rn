import {createSlice} from "@reduxjs/toolkit";
import {getWeatherForLocation} from "./weatherThunk";

const initialState = {
    weather: {},
    loading: false,
    isCelsius: true
};

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        changeScale(state) {
            state.isCelsius = !state.isCelsius;
        },
        clearWeather(state) {
            state.weather = {};
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getWeatherForLocation.pending, (state) => {
            state.loading = true;
        }).addCase(getWeatherForLocation.fulfilled, (state, action) => {
            state.loading = false;
            state.weather = action.payload;
        }).addCase(getWeatherForLocation.rejected, (state) => {
            state.loading = false;
            state.weather = {};
        });
    }
});

export const { changeScale, clearWeather } = weatherSlice.actions;
export default weatherSlice.reducer;
