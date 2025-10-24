import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface CounterState {
    value: number
}



export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: { // didalam ini bebas sekaarang kita tambahkan function 
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByValue: (state, action) => {
            state.value += action.payload
        }
    }
})

export const { increment, decrement, incrementByValue} = counterSlice.actions
export default counterSlice.reducer  //export nya ga ada namanya, nanti kita namakan sendiri ketika di import 