import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import httpRequest from "../../../utils/httpRequest";

import { BASE_URL, API_KEY } from "../../../utils/constants";

const initialState = {
    categories: [],
    categoriesFetchStatus: "idle",
    currentCategory: "all",
};

export const fetchCategories = createAsyncThunk(
    "categories/fetchCategories",
    () => {
        const { request } = httpRequest();

        return request(
            `${BASE_URL}/videoCategories?part=snippet&regionCode=UA&key=${API_KEY}`
        );
    }
);

const categoriesSlice = createSlice({
    name: "videos",
    initialState,
    reducers: {
        changeCurrentCategory: (state, action) => {
            state.currentCategory = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.categoriesFetchStatus = "loading";
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.categoriesFetchStatus = "idle";
                state.categories = action.payload.items;
            })
            .addCase(fetchCategories.rejected, (state) => {
                state.categoriesFetchStatus = "error";
            })
            .addDefaultCase(() => {});
    },
});

const { reducer, actions } = categoriesSlice;

export const { changeCurrentCategory } = actions;

export default reducer;
