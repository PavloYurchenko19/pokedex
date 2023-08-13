import React, {useEffect, useState} from "react";
import {FilterContainer, FilterLabel, FilterSelect} from "./FilterPokemon.styled.ts";
import {pokemonService} from "../../../entities/pokemons/api/pokemonService.ts";
import {FilterPokemonProps, PokemonKindType} from "../../../entities/pokemons/model/model.ts";

export const FilterPokemon: React.FC<FilterPokemonProps> = ({ onFilterChange }) => {
    const [types, setTypes] = useState<string[]>([]);

    useEffect(() => {
        async function fetchTypes() {
            try {
                const { results } = await pokemonService.getAllType()
                const types = results.map((type)=>type.name)
                setTypes(types);
            } catch (error) {
                console.error('Error fetching types:', error);
            }
        }
        fetchTypes();
    }, []);

    const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedType = event.target.value;
        onFilterChange(selectedType as PokemonKindType);
    };

    return (
        <FilterContainer>
            <FilterLabel>Filter by Type:</FilterLabel>
            <FilterSelect onChange={handleTypeChange}>
                <option value="">All Types</option>
                {types.map((type) => (
                    <option key={type} value={type}>
                        {type}
                    </option>
                ))}
            </FilterSelect>
        </FilterContainer>
    );
};
