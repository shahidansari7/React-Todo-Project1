import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './myComponents/Home.jsx'
import './index.css'
import { HashRouter, createBrowserRouter, RouterProvider } from 'react-router'
import App from './App.jsx'
import Todos from './myComponents/Todos.jsx'
import Todoitem from './myComponents/Todoitem.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
        {
    path: "/About",
    element: <Home/>
  },
  {
    path: "",
    element: <h1>Welcome to home</h1>
  },
  {
    path: "/Home",
    element: <h1>Welcome to home</h1>
  }
    ]
  }
  
])

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <router>
    <RouterProvider router = {router}/>
    </router>
  </StrictMode>
  
)
