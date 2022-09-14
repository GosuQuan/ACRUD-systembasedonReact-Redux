import {createSlice} from "@reduxjs/toolkit"
import { fakeList } from "../fakeData/fakeData"
const initializeValue = fakeList 
export const userSlice = createSlice({
    name:"user",
    initialState:{value:initializeValue},
    reducers:{
    addUser:(state,action)=>{
    state.value.push(action.payload)
    
    }
    ,
    removeUser:(state,action)=>{
        state.value = state.value.filter((user)=>user.id!==action.payload.id)
        
    }      
    }
})
export const {addUser,removeUser} = userSlice.actions
export default userSlice.reducer