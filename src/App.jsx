import { Route } from "react-router"
import { Routes } from "react-router"
import { BrowserRouter } from "react-router"
import Layout from "./components/Layout"


function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route element={<Layout />} >
      <Route path="/" element={<div>Home Page</div>} />
      </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
