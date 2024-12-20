import { Route } from "react-router"
import "./styles/index.css"
import MainLayout from "./Layouts/MainLayout"
import { Routes } from "react-router"
import Home from "./pages/Home"

function App() {
  return <>
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={ <Home /> } />
      </Route>
    </Routes>
  </>
}

export default App
