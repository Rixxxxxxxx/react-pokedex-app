import PokeCard from './PokeCard'
import { useContext } from 'react'
import { Container, Box, Button, Grid, TextField } from '@mui/material'
// import SearchIcon from '@mui/icons-material/Search';
import PokemonContext from './PokemonContext'
import Loading from '../Loading'

const PokeDex = () => {

    const { pokemons, handleSearchFilter, getPokemons, filter, isLoading } = useContext(PokemonContext)

    function handleGetPokemons() {
        getPokemons()
    }

    return (
        <Box sx={{ m: 5 }}>
            {isLoading ?
                (<Loading />)
                :
                (
                    <Container>
                        {/* Pokemon Search filter */}
                        {/* <input type="text" value={filter} onChange={searchFilter()} placeholder='search ' /> */}

                        <TextField
                            sx={{ my: 5 }}
                            label='Search Pokemon'
                            variant='filled'
                            onChange={handleSearchFilter}
                        />

                        <Grid container spacing={3} justifyContent='center'>
                            {pokemons.filter((pokemon) => {
                                return filter.toLowerCase() === '' ? pokemon : pokemon.name.toLowerCase().includes(filter);
                            }).map((pokemon, index) =>
                                < Grid
                                    item xs={12} sm={6} md={4}
                                    key={index}
                                >
                                    < PokeCard
                                        id={(pokemon.id)}
                                        name={pokemon.name}
                                        image={pokemon.sprites.front_default}
                                    />
                                </Grid>
                            )}
                        </Grid>
                    </Container>
                )
            }

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
                    variant="contained"
                    onClick={handleGetPokemons}
                >
                    Load More
                </Button>
            </Box>

        </Box >
    )
}

export default PokeDex



