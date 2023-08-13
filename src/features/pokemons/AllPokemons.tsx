import {useGetAllPokemons} from "../../entities/pokemons/lib";
import {Loader} from "../../shared/ui";
import {ContainerCard} from "../../entities/pokemons/style/Pokemons.styled.ts";
import {PokemonLoadMore} from "./PokemonLoadMore.tsx";
import {PokemonCard} from "../../widgets/Pokemons";
import {useCallback} from "react";
import {useNavigate} from "react-router-dom";
import {Berry} from "../../entities/pokemons/model/model.ts";

export const AllPokemons = () => {
    const navigate = useNavigate()

    const {isLoading, pokemons, loadMore} = useGetAllPokemons()


    const chosePokemon = useCallback((name: string, pokemon: Berry)=>{
        navigate(`/${name}`, {state:{pokemon}})
    },[])

    return (
        <>
            <ContainerCard>
                {
                    pokemons?.map((pokemon)=> {
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

