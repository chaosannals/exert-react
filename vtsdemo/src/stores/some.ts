import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export const someSlice = createSlice({
    name: "some",
    initialState: {
        token: "",
        firstName: "",
        lastName: "",

    },
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
        setFullname: (state, action: PayloadAction<{ first: string, last: string }>) => {
            state.firstName = action.payload.first;
            state.lastName = action.payload.last;
        }
    }
})

export const { setToken, setFullname } = someSlice.actions