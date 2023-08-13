import {Berry, NamedAPIResource} from "../model/model.ts";

export interface PokemonTypeType {
    name: string;
    url: string;
}

export interface PokemonTypeListResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonTypeType[];
}

export interface PokemonService {
    getAllPokemon: (offset: number) => Promise<NamedAPIResourceList>;
    getAllType: () => Promise<PokemonTypeListResponse>;
    getPokemon: (name: string) => Promise<Berry>;
}

export interface NamedAPIResourceList {
    count: number;
    next: string | null;
    previous: string | null;
    results: NamedAPIResource[];
}
