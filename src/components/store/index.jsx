import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./reducer/movie";
import { reducer as formReducer } from "redux-form";

export const store = configureStore({
    reducer: {
        form: formReducer,
        movie: movieReducer,
    }
})
