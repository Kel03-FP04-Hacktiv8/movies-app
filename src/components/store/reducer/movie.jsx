import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    movie: [],
    isLoading: false,
};

export const getMovie = createAsyncThunk("movie/getMovie", async (query) => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BASE_URL}?apiKey=${process.env.REACT_APP_API_KEY}&s=${query}`
        );
        return response.data;
    } catch (error) {
        throw error;
    }
});

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMovie.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(getMovie.fulfilled, (state, action) => {
                state.isLoading = false;
                state.movie = action.payload;
            })
            .addCase(getMovie.rejected, (state, action) => {
                state.isLoading = false;
                console.log("error", action.error.message);
            });
    },
});

export default movieSlice.reducer;
