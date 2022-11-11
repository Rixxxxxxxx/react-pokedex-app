import Navbar from "./components/navbar/Navbar";
import PokeDex from "./components/pokemon/PokeDex";
import PokeDetails from "./components/pokemon/PokeDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {

  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>

      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<PokeDex />}></Route>
          <Route path="pokemon/:pokeName" element={<PokeDetails />}></Route>
        </Routes>
      </Router >

    </QueryClientProvider>


  );

}

export default App;
