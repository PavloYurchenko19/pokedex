import {
    PokemonDetailsContainer,
    PokemonImage, PokemonName,
    PokemonStat,
    PokemonStatContainer,
    PokemonType, StatLabel
} from "./PokemonDetails.styled.ts";
import {useGetAllDetailsByName} from "../../../entities/pokemons/lib";
import {useLocation, useParams} from "react-router-dom";
import {Loader} from "../../../shared/ui";
import {typeColor} from "../../../entities/pokemons/const/const.ts";

export const PokemonDetails = () => {
    const {name}= useParams()
    const {state}= useLocation()

    const {isLoading, pokemon} = useGetAllDetailsByName({name, pokemon: state?.pokemon})

    if (isLoading) return <Loader isLoading/>
    if (!pokemon) return <></>

    return (
        <PokemonDetailsContainer color={typeColor[pokemon.type]}>
            <PokemonImage src={pokemon.img} alt={`Pokemon ${pokemon.name}`} />
            <PokemonName>Name: {pokemon.name} #{pokemon.id}</PokemonName>
            <PokemonType>Type: {pokemon.type}</PokemonType>
            <PokemonStatContainer>
                {
                    pokemon?.stats?.map((stats)=>{
                        return (
                            <PokemonStat key={pokemon.id + stats.name}>
                                <StatLabel>{stats.name} {stats.value}</StatLabel>
                            </PokemonStat>
                        )
                    })
                }
                <PokemonStat>
                    <StatLabel>Weight {pokemon.weight}</StatLabel>
                </PokemonStat>
                <PokemonStat>
                    <StatLabel>Total Moves {pokemon.moves}</StatLabel>
                </PokemonStat>
            </PokemonStatContainer>
        </PokemonDetailsContainer>
    );
};


