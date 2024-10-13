import { configureStore } from "@reduxjs/toolkit";

import favoritesReducer from "./favorites";

export const store = configureStore({
  reducer: {
    favoriteMeals: favoritesReducer,
  },
});

/*
o Redux is an alternative to context. Used primarily for larger, (sometimes older) projects
    whereas context is used for more mobile apps
o A Reducer holds the different elements of state to be accessed in your store
o 

*/
