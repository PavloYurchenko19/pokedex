import React from "react";
import {LoadMoreButton} from "../../entities/pokemons/style/Pokemons.styled.ts";
import {PokemonLoadMoreProps} from "../../entities/pokemons/model/model.ts";

export const PokemonLoadMore:React.FC<PokemonLoadMoreProps> = ({onClick, disabled}) => {
    return (
        <LoadMoreButton onClick={onClick} disabled={disabled}>
            Load more
        </LoadMoreButton>
    );
};