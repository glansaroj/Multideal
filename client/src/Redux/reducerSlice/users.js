
import { createSlice } from "@reduxjs/toolkit";

// Initail state
export const initialState = {
  token:'',
  userDetails: {}
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
                userDetails
            }
      },
    },
  })

export const { setUserDetails } = usersSlice.actions;
export default usersSlice.reducer;