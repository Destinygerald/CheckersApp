import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import App from './App.tsx'
import { CommentContextProvider } from "./Context/CommentContext"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <CommentContextProvider>
        <App />
      </CommentContextProvider>
    </BrowserRouter>
)

  // <React.StrictMode>
  
  // </React.StrictMode>