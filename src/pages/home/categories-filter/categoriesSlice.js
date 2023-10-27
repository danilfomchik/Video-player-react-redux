import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import qs from "query-string";

import httpRequest from "../../../utils/httpRequest";

import { BASE_URL, API_KEY } from "../../../utils/constants";

const { categoryId } = qs.parse(document.location.search);

const initialState = {
    categories: [],
    categoriesFetchStatus: "idle",
    currentCategory: categoryId || "0",
};

export const fetchCategories = createAsyncThunk(
    "categories/fetchCategories",
    () => {
        const { request } = httpRequest();

        return request({
            url: `${BASE_URL}/videoCategories?part=snippet&regionCode=UA&key=${API_KEY}`,
        });
    }
);

const categoriesSlice = createSlice({
    name: "categories",
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
