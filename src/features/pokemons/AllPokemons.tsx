import {useGetAllPokemons} from "../../entities/pokemons/lib";
import {Loader} from "../../shared/ui";
import {ContainerCard} from "../../entities/pokemons/style/Pokemons.styled.ts";
import {PokemonLoadMore} from "./PokemonLoadMore.tsx";
import {PokemonCard} from "../../widgets/Pokemons";
import {useCallback, useMemo, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Berry, PokemonKindType} from "../../entities/pokemons/model/model.ts";
import {FilterPokemon} from "./FilterPokemon/FilterPokemon.tsx";

export const AllPokemons = () => {
    const navigate = useNavigate()
    const [filter, setFilter] = useState<PokemonKindType>()
    const {isLoading, pokemons, loadMore} = useGetAllPokemons()

    const filteredPokemons = useMemo(()=>{
        if (!filter) return pokemons
        return pokemons.filter((pokemon)=> !!pokemon.types.filter(value => value.type.name === filter).length)
    },[filter,pokemons])

    const chosePokemon = useCallback((name: string, pokemon: Berry)=>{
        navigate(`/dist/${name}`, {state:{pokemon}})
    },[])

    const onFilterChange = useCallback((event: PokemonKindType)=>{
        setFilter(event)
    },[])

    return (
        <>
            <FilterPokemon onFilterChange={onFilterChange}/>
            <ContainerCard>
                {
                    filteredPokemons?.map((pokemon)=> {
                        return (
                            <PokemonCard
                                key={pokemon.name}
                                pokemon={pokemon}
                                onClick={chosePokemon}
                            />
                        )
                    })
                }
            </ContainerCard>
            <Loader isLoading={isLoading}/>
            <PokemonLoadMore onClick={loadMore} disabled={isLoading}/>
        </>
    );
};

