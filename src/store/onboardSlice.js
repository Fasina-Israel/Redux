import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    formData: {},
};

export const onboardSlice = createSlice({
    name: "onboard",
    initialState,
    reducers: {
        setFormaData: (state, { payload }) => {

            const { question, answer } = payload
            console.log(payload)
            state.formData[question] = answer
        },
    },
});

export const { setFormaData } = onboardSlice.actions;
export const onboardReducer = onboardSlice.reducer;