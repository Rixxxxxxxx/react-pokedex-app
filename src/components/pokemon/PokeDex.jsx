import { useState, useEffect } from 'react'

import { Container, Box, Button, Grid, TextField } from '@mui/material'

import PokeCard from './PokeCard'
import Loading from '../Loading'

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const PokeDex = () => {

    // const [pokemons, setPokemons] = useState([]);
    const [loadMore, setLoadMore] = useState(`https://pokeapi.co/api/v2/pokemon/?limit=21`);
    const [filter, setFilter] = useState('');

    // const getPokemons = async () => {
    //     const response = await fetch(loadMore);
    //     const data = await response.json();
    //     return data.results

    //     setLoadMore(data.next)

    //     const getPokemonData = async (result) => {
    //         result.map(async (pokemon) => {
    //             const response = await fetch(pokemon.url);
    //             const data = await response.json()
    //             setPokemons(currentPokemon => [...currentPokemon, data]);
    //         })
    //     }
    //     await getPokemonData(data.results);
    // }

    const { data, isLoading, isError } = useQuery(["pokemon"], () => {

        return axios.get(loadMore)
            .then((res) => res.results)
    })

    if (isLoading) {
        return <><Loading /></>
    }

    if (isError) {
        return <>Error</>
    }

    const handleSearchFilter = e => {
        setFilter(e.target.value);
    }

    return (

        <Box sx={{ m: 5 }}>
            <Container>
                {/* Pokemon Search filter */}
                {/* <input type="text" value={filter} onChange={searchFilter()} placeholder='search ' /> */}
                {/* 
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
                </Grid> */}

                <div>
                    {data.map((pokemon) => {
                        <div>{pokemon?.name}</div>
                    })}
                </div>

                {/* {pokemons.map((pokemon, id) => {
                    <PokeCard
                        id={(pokemon.id)}
                        name={pokemon.name}
                        image={pokemon.sprites.front_default}
                    />
                })} */}

            </Container>

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
                // onClick={getPokemons}
                >
                    Load More
                </Button>
            </Box>

        </Box >
    )
}

export default PokeDex



