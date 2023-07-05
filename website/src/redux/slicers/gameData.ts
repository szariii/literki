import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { RoomInformation } from "../../interfaces";

const initialState:RoomInformation={
    id:"0",
    status:"not",
    players:[],
    bonusPlaces:[]
}

export const gameDataSlicer = createSlice({
    name:"gameData",
    initialState,
    reducers:{
        add:(state, action:PayloadAction<RoomInformation>)=>{
            state.id = action.payload.id
            state.players=action.payload.players
            state.status=action.payload.status
            state.bonusPlaces=action.payload.bonusPlaces
        },

        endGame:(state)=>{
            state.id = initialState.id
            state.players=initialState.players
            state.status=initialState.status
            state.bonusPlaces=initialState.bonusPlaces
        }
    }
})

export const {add, endGame} = gameDataSlicer.actions
export default gameDataSlicer.reducer