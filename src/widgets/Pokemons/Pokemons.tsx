import {GoToTopButton, Header} from "../../shared/ui";
import {PokemonsWrapper} from "../../entities/pokemons/style/Pokemons.styled.ts";
import {AllPokemons} from "../../features/pokemons";


export const Pokemons = () => {
    return (
        <>
            <Header title='Pokedex'/>
            <PokemonsWrapper>
                <AllPokemons/>
            </PokemonsWrapper>
            <GoToTopButton/>
        </>

    );
};

