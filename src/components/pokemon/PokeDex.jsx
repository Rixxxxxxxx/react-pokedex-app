import PokeCard from './PokeCard'
import { useContext, useEffect, useState } from 'react'
import { Container, Box, Button, Grid, TextField } from '@mui/material'
// import SearchIcon from '@mui/icons-material/Search';
import PokemonContext from './PokemonContext'

const PokeDex = () => {

    const { pokemons, handleSearchFilter, getPokemons, filter } = useContext(PokemonContext)

    return (
        <Box sx={{ m: 5 }}>
            <Container>
                {/* Pokemon Search filter */}
                {/* <input type="text" value={filter} onChange={searchFilter()} placeholder='search ' /> */}
                <TextField
                    sx={{ my: 5 }}
                    label='Search Pokemon'
                    variant='filled'
                    onChange={handleSearchFilter}
                />

                <Grid container spacing={3}>
                    {pokemons.filter((pokemon) => {
                        return filter.toLowerCase() === '' ? pokemon : pokemon.name.toLowerCase().includes(filter);
                    }).map((pokemon, index) =>
                        < Grid
                            item xs={4}
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
                        onClick={() => getPokemons()}
                    >
                        Load More
                    </Button>
                </Box>

            </Container>
        </Box >
    )
}

export default PokeDex