import type { PayloadAction } from "@reduxjs/toolkit";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

export function rememberStore<T extends Object>(name: string, initialState: T): () => [T, (v: T) => void] {
    const slice = createSlice({
        name,
        initialState,
        reducers: {
            assign: (state, action: PayloadAction<T>) => {
                Object.assign(state, action.payload);
            }
        }
    });
    const { assign } = slice.actions;
    const store = configureStore({
        reducer: slice.reducer,
    });

    const assignState = (): [T, (v: T) => void] => {
        const [auth, setAuth] = useState(store.getState());
        store.subscribe(() => {
            setAuth(store.getState());
        });
        return [auth, (v) => {
            store.dispatch(assign(v));
        }];
    }
    return assignState;
}

export interface FooStore {
    name?: string, // 空值会有问题。
    age: number,
}

export const stateFoo = rememberStore<FooStore>("cat", { name: "123", age: 1 });
