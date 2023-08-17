
import { createSlice } from "@reduxjs/toolkit";

// Initail state
export const initialState = {
    wishList: [],
    cartList: [],

};


// Creating slice
const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addToWishList: (state, action) => {
            const existingWishList = [...state.wishList];
            existingWishList.push(action.payload)
            return {
                ...state,
                wishList: existingWishList,
            }

        },

        addToCartList: (state, action) => {
            const existingCartList = [...state.cartList];
            existingCartList.push(action.payload);

            return {
                ...state,
                cartList: existingCartList,

            }
        },

        removeFromCart: (state, action) => {
            const initCartList = [...state.cartList];                 
            const index = initCartList.indexOf(action.payload);   
            initCartList.splice(index, 1); 

            // TODO: Figure out best way to remove from cartlist for the future pref.
            // initCartList.filter((item) => item.title !== action.payload.title)

            return {
                ...state,
                cartList: initCartList,
            }
        },

    }
})


export const { addToCartList, addToWishList, removeFromCart } = productsSlice.actions;
export default productsSlice.reducer;
