import { configureStore,Store } from "@reduxjs/toolkit";
//import SideBarContextReducer from "./SideBarContext";

export const store: Store = configureStore({
    reducer: {
        //Menu: SideBarContextReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;