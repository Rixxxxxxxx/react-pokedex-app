import PokeCard from './PokeCard'
import { useState, useEffect } from 'react'
import { Container, Box, Button, Grid } from '@mui/material'

const PokeDex = () => {

    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadMore, setLoadMore] = useState(`https://pokeapi.co/api/v2/pokemon/?limit=21`);

    useEffect(() => {
        getPokemons()
    }, [])

    async function getPokemons() {

        setLoading(true)

        const response = await fetch(loadMore);
        const data = await response.json();

        setLoadMore(data.next)

        function getPokemonData(result) {
            result.map(async (pokemon) => {
                const response = await fetch(pokemon.url);
                const data = await response.json()

                setPokemons(currentPokemon => [...currentPokemon, data]);

            })
        }
        getPokemonData(data.results);
        console.log(data.results)
    }

    return (
        <Box sx={{ m: 5 }}>
            <Container>
                <Grid container spacing={3}>
                    {pokemons.map((pokemon, index) =>
                        <Grid
                            item xs={4}
                            key={index}>
                            < PokeCard
                                id={pokemon.id}
                                name={pokemon.name}
                                image={pokemon.sprites.front_default}
                                type={pokemon.types[0].type.name}
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
                    <Button
                        color="primary"
                        size="large"
                        type="submit"
                        variant="contained"
                        onClick={() => getPokemons()}
                    >
                        Load More
                    </Button>
                </Box>

            </Container>
        </Box>
    )
}

export default PokeDex