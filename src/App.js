import { Box, Container, Grid, Paper, Button, Stack } from "@mui/material";
import Navbar from "./components/navbar/Navbar"
import PokeCard from "./components/pokemon/PokeCard";
import { useState, useEffect } from 'react'

function App() {

  //1st state all pokemon
  // const [allPokemons, setAllPokemons] = useState([])

  //2nd state load more
  // const [loadMore, setLoadMore] = useState(`https://pokeapi.co/api/v2/pokemon?limit=100`)

  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [baseUrl, setBaseUrl] = useState(`https://pokeapi.co/api/v2/pokemon/`);
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();

  useEffect(() => {
    // getAllPokemons();
    getPokemons()
  }, [baseUrl])

  async function getPokemons() {
    setLoading(true)
    const response = await fetch(baseUrl);
    const data = await response.json();

    setNextPage(data.next)
    setPrevPage(data.previous)
    getPokemonData(data.results)
    setLoading(false)
  }

  async function getPokemonData(results) {
    results.map(async (pokemon) => {
      const response = await fetch(pokemon.url);
      const data = await response.json()

      setPokemons(currentPokemon => [...currentPokemon, data]);
      console.log(data)
    })
  }

  //Function Get Pokemons
  // const getAllPokemons = async () => {
  //   const res = await fetch(loadMore)
  //   const data = await res.json()

  //   setLoadMore(data.next)

  //   function createPokemonObject(result) {
  //     result.forEach(async (pokemon) => {
  //       const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
  //       const data = await res.json()

  //       setAllPokemons(currentList => [...currentList, data])
  //     });
  //   }
  //   createPokemonObject(data.results)
  //   await console.log(allPokemons)

  return (
    <>
      <Container>

        <Grid container spacing={3}>
          {pokemons.map((pokemon, index) =>
            <Grid item xs={4}>
              < PokeCard
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.sprites.front_default}
                type={pokemon.types[0].type.name}
                key={index}
              />
            </Grid>
          )}
        </Grid>

        <Box
          my={4}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* <Button
            color="primary"
            size="large"
            type="submit"
            variant="contained"
            onClick={() => getAllPokemons()}
          >
            Load More
          </Button> */}
        </Box>

      </Container>

    </>

  );

}

// async function getAllPokemons() {
//   const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100`);
//   const data = await response.json();

//   setPokemons(data.results);
//   console.log(data.results)
// }



export default App;
