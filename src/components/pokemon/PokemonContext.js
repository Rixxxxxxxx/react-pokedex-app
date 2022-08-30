import { createContext, useState, useEffect } from 'react'

const PokemonContext = createContext()

export const PokemonProvider = ({ children }) => {

    const [pokemon, setPokemon] = useState('')
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [loadMore, setLoadMore] = useState(`https://pokeapi.co/api/v2/pokemon/?limit=21`);
    const [filter, setFilter] = useState('');
    const [skeletonloader, setSkeletonLoader] = useState(false)

    useEffect(() => {
        getPokemons()
    }, [])

    const getPokemons = async () => {

        try {
            setLoading(true)
            const response = await fetch(loadMore);
            const data = await response.json();
            setLoadMore(data.next)

            const getPokemonData = async (result) => {
                result.map(async (pokemon) => {
                    const response = await fetch(pokemon.url);
                    const data = await response.json()
                    setPokemons(currentPokemon => [...currentPokemon, data]);
                })
            }

            await getPokemonData(data.results);
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false)
        }

    }

    const handleSearchFilter = e => {
        setFilter(e.target.value);
    }

    const getPokemon = async (name) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json()
        setPokemon(data)
        setSkeletonLoader(true)
        // await console.log(data)
    }

    return (
        <PokemonContext.Provider
            value={{
                pokemon,
                pokemons,
                filter,
                skeletonloader,
                isLoading,
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