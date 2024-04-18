import { createBrowserRouter } from "react-router-dom"
import { RouterProvider } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./assets/pages/Home"
import Login from "./assets/pages/Login"
import Register from "./assets/pages/Register"
import ProductList from "./assets/pages/ProductList"
import SingleProduct from "./assets/pages/SingleProduct"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/register",
      element:<> <Navbar/> <Register /> </> 
    },
    {
      path: "/login",
      element:<> <Navbar/> <Login /> </> 
    },
    {
      path: "/product",
      element:<> <Navbar/> <ProductList /> </>
    },
    {
      path: "/singleproduct/",
      element:<> <Navbar/> <SingleProduct /> </>
    }
  
  ])
  

  return (
    <>
    
     <RouterProvider router={router}/>
    </>
  )
}

export default App
