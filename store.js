import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./screen/home/HomeSlice";

export default store = configureStore({
    reducer: {
        home: homeReducer
    }
})