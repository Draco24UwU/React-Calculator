import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "./constants/styles/Animations.css"

// Declaracion del Provider de Redux y el Store para el Estado Global.
import { Provider } from "react-redux";
import { store } from './context/store.ts';


// Declaracion del router y el RouterProvider para las Rutas de la Aplicacion.
import {RouterProvider} from "react-router-dom";
import router from './routes/AppRoutes.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
