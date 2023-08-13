import {GoToTopButton, Header} from "../../shared/ui";
import {MainWrapper, PokemonsWrapper} from "../../entities/pokemons/style/Pokemons.styled.ts";
import {AllPokemons} from "../../features/pokemons";
import {PokemonDetails} from "./PokemonDetails/PokemonDetails.tsx";

export const Pokemons = () => {
    return (
        <>
            <Header title='Pokedex'/>
            <MainWrapper>
            <PokemonsWrapper>
                <AllPokemons/>
            </PokemonsWrapper>
            <PokemonsWrapper>
                <PokemonDetails/>
            </PokemonsWrapper>
            <GoToTopButton/>
           </MainWrapper>
        </>
    );
};

