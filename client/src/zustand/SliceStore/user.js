
// Importing create 
import { create } from "zustand";

export const createUserSlice = (set) => ({
    fullName: 'Leo',
    email: '',
    token: '',
    isLoggedIn: false,    

})