import { configureStore } from "@reduxjs/toolkit";
import unitySlice from "./unitySlice"
import factionSlice from "./factionSlice"

export const store = configureStore({
    reducer: {
        unity: unitySlice,
        faction: factionSlice
    }
});