import { createSlice } from "@reduxjs/toolkit";

const firstState={
    cartitems:[  ],
     User:
    [
        { id: 1, name: "First", type: "Default Type", price: 1 },
        { id: 2, name: "Second  ", type: "Default Type", price: 12 },
        { id: 3, name: "Third", type: "Default Type", price: 13 },
        { id: 4, name: "fourth", type: "Default Type", price: 14 },
        { id: 5, name: "fifth", type: "Default Type", price: 15 },
        { id: 6, name: "Sixth", type: "Default Type", price: 16 },
        { id: 7, name: "Seventh", type: "Default Type", price: 17 },]
}

  const Slice=createSlice({
    name:'counter',
    initialState:firstState,
    reducers:{
        addItem:(state,actions)=>{
            const {val}=actions.payload
            // console.log( val);
            state.cartitems.push(val);
            // console.log(state.cartitems)
        },
        removeItem:(state,actions)=>{
            const {id}=actions.payload
            console.log(actions.payload);
            state.cartitems=state.cartitems.filter((item)=>item.id!==id)
        }
    }
})

export const {addItem,removeItem}=Slice.actions
export default Slice.reducer