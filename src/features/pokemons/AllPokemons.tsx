import {useGetAllPokemons} from "../../entities/pokemons/lib";
import {Loader} from "../../shared/ui";
import {ContainerCard} from "../../entities/pokemons/style/Pokemons.styled.ts";
import {PokemonCard} from "../../widgets/PokemonCard";
import {PokemonLoadMore} from "./PokemonLoadMore.tsx";

export const AllPokemons = () => {
    const {isLoading, pokemons, loadMore} = useGetAllPokemons()

    if (isLoading) return  <Loader isLoading/>

    return (
        <>
            <ContainerCard>
                {
                    pokemons?.map((pokemon)=> {
                        return <PokemonCard key={pokemon.name} pokemon={pokemon}/>
                    })
                }
            </ContainerCard>
            <PokemonLoadMore onClick={loadMore}/>
        </>

    );
};

