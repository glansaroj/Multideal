
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

        removeFromWishList: (state, action) => {
            let initWishList = [...state.wishList];
            const removeItem = action.payload;
            initWishList = initWishList.filter((item) => item.title !== removeItem.title)

            return {
                ...state,
                wishList: initWishList,
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
            let initCartList = [...state.cartList];
            // const index = initCartList.indexOf(action.payload);   
            // initCartList.splice(index, 1);

            const deleteItem = action.payload;
            initCartList = initCartList.filter((item) => item.title !== deleteItem.title)

            return {
                ...state,
                cartList: initCartList,
            }
        },

    }
})


export const { addToCartList, addToWishList, removeFromCart, removeFromWishList } = productsSlice.actions;
export default productsSlice.reducer;
