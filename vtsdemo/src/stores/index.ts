import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './counter'
import { timerSlice } from './timer'

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        timer: timerSlice.reducer,
    }
})

store.subscribe(() => {
    console.log(store.getState())
})
