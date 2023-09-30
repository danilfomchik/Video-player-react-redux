import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchValue: "",
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
});

const { reducer, actions } = searchSlice;

export const { onSearch, resetSearchValue } = actions;

export default reducer;
