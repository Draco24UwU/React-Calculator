import { createSlice } from "@reduxjs/toolkit";

// Interfaz del Estado Global
interface DarkMode {
    isOpen: boolean;
}

// Valor Inicial del Estado Global
const initialState: DarkMode = {
    isOpen: localStorage.getItem('darkMode') === "true"
}

const openMenu = createSlice({
    name: "DarkMode",
    initialState,
    reducers: {
        switchDarkMode: (state) => {
            state.isOpen = !state.isOpen;
            localStorage.setItem("darkMode", state.isOpen.toString());
        }
    },
})

// Exportacion de las Acciones y el Reducer.
export const {switchDarkMode} = openMenu.actions;
export default openMenu.reducer;