import {configureStore} from "@reduxjs/toolkit";
import weatherSlice from "./weatherSlice";
import citySlice from "./citySlice";

export default configureStore({reducer: { weather: weatherSlice, cities: citySlice }});
