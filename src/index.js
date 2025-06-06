import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import Context from "./Context"
import "@splidejs/splide/dist/css/splide.min.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <BrowserRouter>
    <Context>
        <App />
    </Context>
  </BrowserRouter>
)
