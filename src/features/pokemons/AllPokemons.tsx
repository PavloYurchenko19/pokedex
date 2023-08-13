import {useGetAllPokemons} from "@entities/pokemons/lib";
import {Loader} from "@shared/ui";
import {PokemonCard} from "@widgets/PokemonCard";
import {ContainerCard} from "@entities/pokemons/style/Pokemons.styled.ts";
import {PokemonLoadMore} from "@features/pokemons/PokemonLoadMore.tsx";

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

