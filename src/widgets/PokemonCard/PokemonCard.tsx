import React from 'react';
import {
    Card, ImagePokemon,
    PokeName,
    Types
} from "@entities/pokemons/style/Pokemons.styled.ts";
import {typeColor} from "@entities/pokemons/const/const.ts";
import {PokemonCardI} from "@entities/pokemons/model/model.ts";

export const PokemonCard:React.FC<PokemonCardI> = ({pokemon}) => {

    const firstType = pokemon.types[0].type.name

    return (
        <Card color={typeColor[firstType]}>
            <div>
                <ImagePokemon src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
                <PokeName>{pokemon.name}</PokeName>
            </div>
            <Types>
                {pokemon.types.map((type)=> <span key={type.type.name}>{type.type.name}</span>)}
            </Types>
        </Card>
    );
};
