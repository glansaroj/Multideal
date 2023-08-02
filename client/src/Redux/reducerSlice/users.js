
import { createSlice } from "@reduxjs/toolkit";

// Initail state
export const initialState = {
  token:'',
  userDetails: {},
  isLoggedIn: false
};


// Creating slice
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
      setUserDetails(state, actions) {
        debugger;
        const {token, userDetails} = actions.payload
            return{
                ...state,
                token,
                userDetails,
                isLoggedIn: true
            }
      },
    },
  })

export const { setUserDetails } = usersSlice.actions;
export default usersSlice.reducer;