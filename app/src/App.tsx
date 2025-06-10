import { BrowserRouter } from "react-router-dom"
import NavBar from "./components/NavBar"
import AnimatedRoutes from "./components/AnimatedRoutes"

function App() {

  return (
    <BrowserRouter>
      <AnimatedRoutes />
      <NavBar />
    </BrowserRouter>
  )
}

export default App
