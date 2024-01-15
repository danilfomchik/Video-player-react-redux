import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase-config";

import Cookies from "universal-cookie";
const cookies = new Cookies();

const initialState = {
    isAuth: !!cookies.get("auth-token"),
    user: cookies.get("user") || null,
    loading: false,
};

export const onLogin = createAsyncThunk("auth/onLogin", () => {
    return signInWithPopup(auth, provider);
});

export const onLogout = createAsyncThunk("auth/onLogout", () => {
    return signOut(auth);
});

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(onLogin.pending, (state) => {
                state.loading = true;
            })
            .addCase(onLogin.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuth = true;
                state.user = action.payload.user;

                cookies.set("auth-token", action.payload.user.refreshToken);
                cookies.set("user", action.payload.user);
            })
            .addCase(onLogin.rejected, (state, action) => {
                state.loading = false;
                state.isAuth = false;
                state.error = action.payload;
            })
            .addCase(onLogout.pending, (state) => {
                state.loading = true;
            })
            .addCase(onLogout.fulfilled, (state) => {
                state.loading = false;
                state.isAuth = false;
                state.user = null;

                cookies.remove("user");
                cookies.remove("auth-token");
            })
            .addCase(onLogout.rejected, (state, action) => {
                state.loading = false;
                state.isAuth = false;
                state.error = action.payload;
            });
    },
});

const { reducer } = authSlice;

export default reducer;
