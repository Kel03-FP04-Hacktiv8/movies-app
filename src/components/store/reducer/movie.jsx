import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    movies: [],
    isLoading: false,
};

const apiKey = 'ef620b30';

export const getDetail = createAsyncThunk("detail/getDetail", async (query) => {
    const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${apiKey}&i=${query}`
    );
    console.log(response.data);
    return response.data;
})

export const getMovie = createAsyncThunk('movie/getMovie', async (query) => {
    const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`
    );
    console.log(response.data);
    return response.data;
});

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMovie.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getMovie.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.movies = payload;
            })
            .addCase(getMovie.rejected, (state) => {
                state.isLoading = false;
              
            })
            .addCase(getDetail.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getDetail.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.movie = payload;
            })
            .addCase(getDetail.rejected, (state) => {
                state.isLoading = false;
            });
    },
});

export default movieSlice.reducer;
