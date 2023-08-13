import {Route, Routes} from "react-router-dom";
import {PokemonsPage} from "../pages/PokemonsPage";

export function App() {

  return (
          <Routes>
              <Route path="/" element={<PokemonsPage/>} />
          </Routes>
  )
}

