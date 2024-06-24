import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        user: null
    },
    reducer: {
        setCredentials: (state, action) => {
            const { user, accessToken } = action.payload
            state.user = user
            state.token = accessToken
        },
        logout: (state, action) => {
            state.user = null
            state.token = null
        }
    }
})

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentTok = (state) => state.auth.token;