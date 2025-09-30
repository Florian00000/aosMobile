import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../utils/constant";


export const fetchAllFactions = createAsyncThunk("factions/fetchAllFactions", async () => {
    try {
        const response = await axios.get(`${BASE_URL}api/factions`);
        const data = await response.data;
        return data;
    } catch (error) {
        console.log(error);           
    }    
})



const factionSlice = createSlice({
    name: "faction",
    initialState: {
        factions: [],
        isPending: false,
    },
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllFactions.fulfilled, (state, action) => {
            state.factions = action.payload;
            console.log(action.payload);
        });        
    }
})

export default factionSlice.reducer;