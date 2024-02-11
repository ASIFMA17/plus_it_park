import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: null
    // isAthenticated : false,
}

const productsSlice = createSlice({
    name: "products slice",
    initialState,
    reducers: {
        setProducts: function (state, actions) {     //set state method defined
            state.product = actions.payload;
        }
    }
});


export const { setProducts } = productsSlice .actions;

export default productsSlice .reducer;