import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../utils/constant";


export const fetchListUnitsByFaction = createAsyncThunk("units/fetchUnitsByFaction", async (faction) => {
    try {
        const response = await axios.get(`${BASE_URL}units/get-all-by-faction/${faction}`);
        const data = await response.data;
        return data;
    } catch (error) {
        console.log(error);           
    }    
})



const unitySlice = createSlice({
    name: "unity",
    initialState: {
        units: [],
        isPending: false,
    },
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchListUnitsByFaction.fulfilled, (state, action) => {
            state.units = action.payload;
            console.log(action.payload);
        });        
    }
})

export default unitySlice.reducer;