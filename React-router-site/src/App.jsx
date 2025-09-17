import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Layout from './Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import User from './components/User/User'
import Github, { githubloaderinfo } from './components/Github/Github'

function App() {
  const router = createBrowserRouter([
    {
      path : '/',
      element : <Layout/>,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "contact",
          element: <Contact />
        },
        {
          path: "user/:id",
          element: <User />
        },
        {
          path: "github",
          element: <Github />,
          loader: githubloaderinfo,
        }
      ]
    }
  ])
  
  return (
    <RouterProvider router={router} />
  )
}

export default App
