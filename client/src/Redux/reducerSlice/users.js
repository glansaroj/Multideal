
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
        const {token, userDetails} = actions.payload
            return{
                ...state,
                token,
                userDetails,
                isLoggedIn: true
            }
      },
      handleLogout(state, actions) {
        state = initialState
        return state;
      },

    },
  })


export const { setUserDetails, handleLogout } = usersSlice.actions;
export default usersSlice.reducer;