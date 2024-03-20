import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

const chatSlice = createSlice({
    name:"chat",
    initialState:{
        messages:[]
    },
    reducers:{
        addMessage:(state, action) =>{
            state.messages.splice(LIVE_CHAT_COUNT, 1);// for not overchat and !cracsh removeing 1 message
            state.messages.push(action.payload);// for pushing from the last
        },
    },
});

export const {addMessage} = chatSlice.actions;
export default chatSlice.reducer;