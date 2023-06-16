import { configureStore } from "@reduxjs/toolkit";
import cariReducer from "./reducer/cari";
import movieReducer from "./reducer/movie";
import { reducer as formReducer } from "redux-form";

export const store = configureStore({
    reducer: {
        form: formReducer,
        cari: cariReducer,
        movie: movieReducer,
    }
})
