import {createSlice} from "@reduxjs/toolkit";
import {getCitiesFromSlug} from "./cityThunk";

const initialState = {
    cities: [],
    selectedCity: {},
    loading: false,
};

const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {
        selectCity(state, action) {
            state.selectedCity = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getCitiesFromSlug.pending, (state) => {
            state.loading = true;
            state.cities = [];
        }).addCase(getCitiesFromSlug.fulfilled, (state, action) => {
            state.loading = false;
            state.cities = action.payload;
        }).addCase(getCitiesFromSlug.rejected, (state) => {
            state.loading = false;
            state.cities = [];
        })
    }
});

export const { selectCity } = citySlice.actions;
export default citySlice.reducer;
