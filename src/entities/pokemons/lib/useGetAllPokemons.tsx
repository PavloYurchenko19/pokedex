import {useCallback, useEffect, useState} from 'react';
import {pokemonService} from "../api/pokemonService.ts";
import {Berry} from "../model/model.ts";


export const useGetAllPokemons = () => {
    const [offset, setOffset] = useState<number>(0)
    const [pokemons, setPokemons] = useState<Berry[]>([])
    const [isLoading, stIsLoading] = useState<boolean>(false)

    const getAllPokemons = useCallback(async ()=>{
        try {
            stIsLoading(true)
            const data = await pokemonService.getAllPokemon(offset)

            const pokemonPromise =
                data.results
                    .map(async (value)=>
                        await pokemonService.getPokemon(value.name))

            const fetchedPokemons = await Promise.all(pokemonPromise)
            setPokemons((prevState)=>([...prevState, ...fetchedPokemons]))

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

