import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    count : 0
}

const counterSlice = createSlice({
    name : "counter",
    initialState,
    reducers : {
        increment : (state, action)=>{
            state.count = state.count + action.payload.count
        },
        decrement : (state, action)=>{
            state.count = state.count - action.payload.count
        }
    }
})

export const {increment, decrement} =counterSlice.actions

export default counterSlice.reducer