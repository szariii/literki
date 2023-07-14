import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { RoomInformation } from "../../interfaces";

const initialState:RoomInformation={
    id:"0",
    status:"not",
    player1:{id:"0",nick:""},
    player2:{id:"0",nick:""},
    bonusPlaces:[]
}

export const gameDataSlicer = createSlice({
    name:"gameData",
    initialState,
    reducers:{
        add:(state, action:PayloadAction<RoomInformation>)=>{
            state.id = action.payload.id
            state.player1=action.payload.player1
            state.player2=action.payload.player2
            state.status=action.payload.status
            state.bonusPlaces=action.payload.bonusPlaces
        },

        endGame:(state)=>{
            state.id = initialState.id
            state.player1=initialState.player1
            state.player2=initialState.player2
            state.status=initialState.status
            state.bonusPlaces=initialState.bonusPlaces
        }
    }
})

export const {add, endGame} = gameDataSlicer.actions
export default gameDataSlicer.reducer