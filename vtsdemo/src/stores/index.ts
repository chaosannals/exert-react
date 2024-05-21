import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './counter'
import { timerSlice } from './timer'
import { someSlice, setFullname } from './some'
import { useState } from 'react'

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        timer: timerSlice.reducer,
        some: someSlice.reducer,
    }
})

store.subscribe(() => {
    console.log(store.getState())
})

export const rememberFullname = (): [string, string, (first: string) => void, (last: string) => void] => {
    const state = store.getState();
    const [firstName, setFirstName] = useState(state.some.firstName);
    const [lastName, setLastName] = useState(state.some.lastName);

    store.subscribe(() => {
        const state = store.getState();
        setFirstName(state.some.firstName);
        setLastName(state.some.lastName);
    });
    return [firstName, lastName, (first: string) => {
        const state = store.getState();
        store.dispatch(setFullname({ first, last: state.some.lastName }))
    }, (last: string) => {
        const state = store.getState();
        store.dispatch(setFullname({ first: state.some.firstName, last }))
    }];
}