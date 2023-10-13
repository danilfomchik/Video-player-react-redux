import { createSlice } from "@reduxjs/toolkit";
import qs from "query-string";

import { changeCurrentCategory } from "../../../pages/home-page/categories-filter/categoriesSlice";

const { searchQuery } = qs.parse(document.location.search);

const initialState = {
    searchValue: searchQuery || "",
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        onSearch: (state, action) => {
            state.searchValue = action.payload;
        },
        resetSearchValue: (state) => {
            state.searchValue = "";
        },
    },
    extraReducers: (builder) => {
        // builder.addCase(changeCurrentCategory, (state) => {
        //     state.searchValue = "";
        // });
    },
});

const { reducer, actions } = searchSlice;

export const { onSearch, resetSearchValue } = actions;

export default reducer;
