import { configureStore,Store } from "@reduxjs/toolkit";
import DarkModeContextReducer from "@/context/DarkModeContextReducer";

export const store: Store = configureStore({
    reducer: {
        DarkMode: DarkModeContextReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;