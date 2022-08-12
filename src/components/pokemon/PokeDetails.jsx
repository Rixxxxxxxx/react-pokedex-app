import { Link, useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import { useContext, useEffect } from 'react';
import PokemonContext from './PokemonContext';

const PokeDetails = () => {

    const { getPokemon, pokemon } = useContext(PokemonContext)

    const params = useParams()

    useEffect(() => {
        getPokemon(params.pokeName)
    }, [])


    return (
        <div>

            <h1>{pokemon.name}</h1>
            {/* <img src={pokemon.sprites.other.dream_world.front_default} alt="" /> */}

            <Link to="/">
                <Button
                    color="primary"
                    size="large"
                    variant="contained"
                >
                    Pokedex
                </Button>
            </Link>

        </div >
    )
}

export default PokeDetails