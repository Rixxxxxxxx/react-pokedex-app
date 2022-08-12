import { createContext, useState, useEffect } from 'react'

const PokemonContext = createContext()

export const PokemonProvider = ({ children }) => {

    const [pokemon, setPokemon] = useState('')
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadMore, setLoadMore] = useState(`https://pokeapi.co/api/v2/pokemon/?limit=21`);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        getPokemons()
    }, [])

    async function getPokemons() {
        setLoading(true)
        const response = await fetch(loadMore);
        const data = await response.json();
        setLoading(false)
        setLoadMore(data.next)

        function getPokemonData(result) {
            result.map(async (pokemon) => {
                const response = await fetch(pokemon.url);
                const data = await response.json()
                setPokemons(currentPokemon => [...currentPokemon, data]);
            })
        }
        getPokemonData(data.results);
    }

    function handleSearchFilter(e) {
        setFilter(e.target.value);
    }

    async function getPokemon(name) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json()
        setPokemon(data)
        await console.log(data)
    }

    return (
        <PokemonContext.Provider
            value={{
                pokemon,
                pokemons,
                filter,
                getPokemon,
                getPokemons,
                handleSearchFilter,
            }}
        >
            {children}
        </PokemonContext.Provider>
    )

}

export default PokemonContext