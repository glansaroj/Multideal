
import { createSlice } from "@reduxjs/toolkit";

// Initail state
export const initialState = {
    wishList: [],
    cartList: []

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

    }
})


export const { addToCartList, addToWishList } = productsSlice.actions;
export default productsSlice.reducer;
