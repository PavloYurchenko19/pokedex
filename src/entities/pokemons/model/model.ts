export interface NamedAPIResource {
    name: string;
    url: string;
}

export interface NamedAPIResourceList {
    count: number;
    next: string | null;
    previous: string | null;
    results: NamedAPIResource[];
}

export interface Berry {
    id: number;
    name: string;
    growth_time: number;
    max_harvest: number;
    natural_gift_power: number;
    size: number;
    smoothness: number;
    soil_dryness: number;
    firmness: NamedAPIResource;
    flavors: BerryFlavorMap[];
    item: NamedAPIResource;
    natural_gift_type: NamedAPIResource;
    sprites: {
        other: {
            dream_world: {
                front_default: string
            }
        }
    },
    types: PokemonType[]
    stats: PokemonStat[]
    weight: number
    moves: []
}

export interface PokemonCard {
    pokemon: Berry
}

export interface BerryFlavorMap {
    potency: number;
    flavor: NamedAPIResource;
}

export interface PokemonType {
    slot: number;
    type: {
        name: ColorsType;
        url: string;
    };
}

export interface CardStyledProps {
    color: string
}

export type ColorsType = 'bug' | 'dragon' | 'electric' | 'fairy' | 'fighting' | 'fire' | 'flying' | 'grass' | 'ground' | 'ghost' | 'ice' | 'normal' | 'poison' | 'psychic' | 'rock' | 'water';


export interface PokemonService {
    getAllPokemon: (offset: number) => Promise<NamedAPIResourceList>;
    getPokemon: (name: string) => Promise<Berry>;
}

export interface PokemonLoadMoreProps {
    onClick: ()=> void
    disabled: boolean
}

export interface PokemonCardI {
    pokemon: Berry
    onClick:(name: string, pokemon: Berry) => void
}

export interface PokemonStat {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    };
}


export interface PokemonDetails {
    id: number
    stats: Array<{ name:string, value: number }>
    type: ColorsType
    weight: number
    moves: number
    img: string
    name: string
}

export interface PokemonDetailsContainerProps {
    color: string
}

export interface UseGetAllDetailsByNameProps {
    name?: string
    pokemon: Berry
}