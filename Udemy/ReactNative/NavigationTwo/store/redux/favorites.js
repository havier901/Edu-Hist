import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        ids: [],
    },
    reducers: {
        addFavorite: (state, action) => {
            state.ids.push(action.payload.id);
        },
        removeFavorite: (state, action) => {
            state.ids.splice(state.ids.indexOf(action.payload.id), 1);
        },
    },

});

export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;
export default favoritesSlice.reducer;

/*
o It is convention to separate your logic from your base store in Redux files
o In here we will create our slice
o The functions to alter your initial state are not added to the Slice in Redux
o Reducers are functions that are used to change our state
o Every reducer function gets the latest state as an inpute
o When using redux alone you should make your reducers immutable
o However when using the redux toolkit, you can make them mutable and the toolkit
    will take care of making it immutable
o The action parameter holds another payload 
o After creating our slice we must export our actions as well as our reducer
    The functions can then be used elsewhere
    The ruducer can then be merged with our reducer in our store
*/