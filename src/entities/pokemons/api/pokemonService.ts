import {NamedAPIResourceList, PokemonService} from "../model/model.ts";
import {axiosService} from "../../../shared/api/service/axiosService.ts";
import {urls} from "../../../shared/api/const/const.ts";

export const pokemonService: PokemonService = {
    getAllPokemon:(offset: number) => axiosService.get<NamedAPIResourceList>(`${urls.pokemon}?limit=12&&offset=${offset}`).then(value => value.data),
    getPokemon:(name: string) => axiosService.get(`${urls.pokemon}/${name}`).then(value => value.data)
};