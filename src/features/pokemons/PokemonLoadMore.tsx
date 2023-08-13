import React from "react";
import {LoadMoreButton} from "../../entities/pokemons/style/Pokemons.styled.ts";
import {PokemonLoadMoreProps} from "../../entities/pokemons/model/model.ts";
export const PokemonLoadMore:React.FC<PokemonLoadMoreProps> = ({onClick}) => {
    return (
        <LoadMoreButton onClick={onClick}>
            Load more
        </LoadMoreButton>
    );
};