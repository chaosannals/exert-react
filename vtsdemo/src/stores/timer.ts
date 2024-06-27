import { createSlice } from "@reduxjs/toolkit";

export const timerSlice = createSlice({
    name: "timer",
    initialState: {
        value: 0
    }, reducers: {
        incremented: state => {
            state.value += 1
        },
        decremented: state => {
            state.value -= 1
        }
    }
})

export const { incremented, decremented } = timerSlice.actions;