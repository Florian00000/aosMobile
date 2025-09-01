import { configureStore } from "@reduxjs/toolkit";
import unitySlice from "./unitySlice"

export const store = configureStore({
    reducer: {
        unity: unitySlice,
    }
});