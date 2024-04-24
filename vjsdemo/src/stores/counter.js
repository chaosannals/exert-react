import { configureStore, createSlice } from '@reduxjs/toolkit';

// 这个合并了 createReducer 和 createAction
const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    // 这东西和 vuex 有点像，都是让人恶心的东西,一种过度设计的丑。
    reducers: {
        incremented: state => {
            state.value += 1
        },
        decremented: state => {
            state.value -= 1
        },
    },
});

// 导出，用了和 vuex 一样的名字 actions 。。。
export const { incremented, decremented } = counterSlice.actions

export const counterStore = configureStore({
    reducer: counterSlice.reducer
});

// 类似 Rx 监听了状态变更。
counterStore.subscribe(() => {
    console.log(counterStore.getState());
});