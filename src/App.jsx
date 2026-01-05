import { Route } from "react-router"
import { Routes } from "react-router"
import { BrowserRouter } from "react-router"
import Layout from "./components/Layout"
import Home from "./Home/Home"


function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route element={<Layout />} >
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<div className="h-screen">About Page</div>} />
      </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
