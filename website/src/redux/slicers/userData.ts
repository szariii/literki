import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { UserData } from "../../interfaces";

const initialState:UserData={
    _id:"0",
    nick:"",
    password:"",
    points:0,
    email:""
}

// const initialState:UserData={
//     _id:"64954be462d0a81d45d27e1f",
//     nick:"test",
//     password:"$2a$10$1Efq25TNfpFZmA1Xvd8fr.vOkYKWzU39BXymNmGQLzhNqYinKSu1K",
//     points:1000,
//     email:"test@wp.pl"
// }




export const userDataSlicer = createSlice({
    name:"userData",
    initialState,
    reducers:{
        add:(state, action:PayloadAction<UserData>)=>{
            state._id=action.payload._id
            state.nick=action.payload.nick
            state.password=action.payload.password
            state.points=action.payload.points
            state.email=action.payload.email
        },

        remove:(state)=>{
            state._id=initialState._id
            state.nick=initialState.nick
            state.password=initialState.password
            state.points=initialState.points
            state.email=initialState.email
        },

        win:(state)=>{
            state.points=state.points+10
        },

        lose:(state)=>{
            state.points=state.points-10
        }
    }
})

export const {add, remove, win, lose} = userDataSlicer.actions
export default userDataSlicer.reducer