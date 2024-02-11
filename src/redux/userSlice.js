import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,
    // isAthenticated : false
}

const userSlice = createSlice({
    name: "user slice",
    initialState,
    reducers: {
        setToken: function (state, actions) {     //set state method defined
            state.token = actions.payload;
            // isAthenticated = true;
        },
        deleteToken : function (state , actions) {   //clear state method defined
            state.token = actions.payload;
            // state.isAthenticated = false ;
        }
    }
});


export const { setToken , deleteToken } = userSlice.actions;

export default userSlice.reducer;