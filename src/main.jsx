import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './myComponents/Home.jsx'
import './index.css'
// Change: Import HashRouter and Routes/Route from "react-router"
import { HashRouter, Routes, Route } from "react-router";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        {/* The main App component acts as your layout layout */}
        <Route path="/" element={<App />}>
          {/* Index route handles the base empty path "/" */}
          <Route index element={<h1>Welcome to home</h1>} />
          <Route path="About" element={<Home />} />
          <Route path="Home" element={<h1>Welcome to home</h1>} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
)