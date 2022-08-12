import Navbar from "./components/navbar/Navbar";
import PokeDex from "./components/pokemon/PokeDex";
import PokeDetails from "./components/pokemon/PokeDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from '@mui/material';
import { PokemonProvider } from "./components/pokemon/PokemonContext";

function App() {

  return (
    <PokemonProvider>
      <Router>
        <Navbar />

        <Container>
          <Routes>

            <Route exact path="/" element={<PokeDex />}></Route>
            <Route path="pokemon/:pokeName" element={<PokeDetails />}></Route>

          </Routes>

        </Container>

      </Router >
    </PokemonProvider >


  );

}

export default App;
