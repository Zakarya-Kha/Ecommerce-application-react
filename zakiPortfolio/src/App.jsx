import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Footer from './components/Footer'
// import './App.css'


function App() {
//   const router = createBrowserRouter([
//     {
//       path: '/',
//       element: <><Header /> <Home/></>,
//     },
//     {
//       path: '/About',
//       element: <><Header /> <About/></>,
//     }
    
    
//   ])
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Home />
    <About />
    <Services />
    <Skills />
    <Footer />
    </>
  )
}

export default App
