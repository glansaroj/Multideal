
// Importing create 
import { create } from "zustand";



// creating store hook
const useStore = create((set) => ({
    user: {},
    admin: {},
    product: {},

}))



// TODO:- Split the store into separate slices 

