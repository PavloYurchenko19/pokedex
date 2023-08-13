import {useCallback, useEffect, useMemo, useState} from 'react';
import {pokemonService} from "../api/pokemonService.ts";
import {Berry, PokemonDetails, UseGetAllDetailsByNameProps} from "../model/model.ts";

export const useGetAllDetailsByName = ({name, pokemon: loadedPokemon}: UseGetAllDetailsByNameProps) => {
    const [pokemon, setPokemon] = useState<Berry>()
    const [isLoading, stIsLoading] = useState<boolean>(false)

    const detailPokemon:PokemonDetails | undefined = useMemo(()=>{
        try {
            if (pokemon || loadedPokemon){
                const pokemonToUpdate = loadedPokemon ?? pokemon
                const stats = pokemonToUpdate?.stats?.map((stats)=>{
                    return {name: stats.stat.name, value: stats.base_stat }
                })

                return {
                    stats,
                    name: pokemonToUpdate.name,
                    img: pokemonToUpdate.sprites.other.dream_world.front_default,
                    id: pokemonToUpdate.id,
                    type: pokemonToUpdate.types[0].type.name,
                    weight: pokemonToUpdate.weight,
                    moves: pokemonToUpdate.moves.length
                }
            }

        }catch (e) {
            console.log(e)
        }
    },[loadedPokemon,pokemon])

    const getPokemon = useCallback(async ()=>{
        if (!name) return

        try {
            stIsLoading(true)
            const pokemon = await pokemonService.getPokemon(name)
            setPokemon(pokemon)
        }catch (e) {
            console.log(e)
        }finally {
            stIsLoading(false)
        }
    },[name])

    useEffect(() => {
        if (loadedPokemon) return
        void getPokemon()
    }, [name]);

    return {pokemon: detailPokemon, isLoading}
};

