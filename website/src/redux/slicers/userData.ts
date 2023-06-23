import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { UserData } from "../../interfaces";

const initialState:UserData={
    _id:0,
    nick:"",
    password:"",
    points:0,
    email:""
}

export const userDataSlicer = createSlice({
    name:"userData",
    initialState,
    reducers:{
        add:(state, action:PayloadAction<UserData>)=>{
            console.log(action)
            state=action.payload
        },

        remove:(state)=>{
            state = initialState
        }
    }
})

export const {add, remove} = userDataSlicer.actions
export default userDataSlicer.reducer