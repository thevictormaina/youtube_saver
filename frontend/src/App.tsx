import { Route } from "react-router"
import "./styles/index.css"
import MainLayout from "./Layouts/MainLayout"
import { Routes } from "react-router"

function App() {
  return <>
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={ <div>This is a test.</div> } />
      </Route>
    </Routes>
  </>
}

export default App
