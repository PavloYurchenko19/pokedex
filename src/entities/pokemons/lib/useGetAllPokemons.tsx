import {useCallback, useEffect, useState} from 'react';
import {pokemonService} from "@entities/pokemons/api/pokemonService.ts";
import {Berry} from "@entities/pokemons/model/model.ts";

export const useGetAllPokemons = () => {
    const [offset, setOffset] = useState<number>(0)
    const [pokemons, setPokemons] = useState<Berry[]>([])
    const [isLoading, stIsLoading] = useState<boolean>(false)

    const getAllPokemons = useCallback(async ()=>{
        try {
            stIsLoading(true)
            const data = await pokemonService.getAllPokemon(offset)

            for (const value of data.results) {
                const pokemon = await pokemonService.getPokemon(value.name)
                setPokemons((prevState)=>([...prevState, pokemon]))
            }
        }catch (e) {
            console.log(e)
        }finally {
            stIsLoading(false)
        }
    },[offset])

    const loadMore = useCallback(()=>{
        setOffset(prevState => prevState + 12)
    },[])

    useEffect(() => {
       void getAllPokemons()
    }, [offset]);

    return {pokemons, isLoading, loadMore}
};

