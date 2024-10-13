import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {},

});

/*
o Redux is an alternative to context. Used primarily for larger, (sometimes older) projects
    whereas context is used for more mobile apps
o A Reducer holds the different elements of state to be accessed in your store

NOTE: I switched over to a copy of the App module in order to leave my context components
in use on this one
*/