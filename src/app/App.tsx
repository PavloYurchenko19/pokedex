import {Route, Routes} from "react-router-dom";
import {Pokemons} from "../pages/Pokemons";

function App() {

  return (
          <Routes>
              <Route path="/" element={<Pokemons/>} />
          </Routes>
  )
}

export default App
