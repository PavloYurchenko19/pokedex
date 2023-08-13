
export interface NamedAPIResource {
    name: string;
    url: string;
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
        name: PokemonKindType;
        url: string;
    };
}

export interface CardStyledProps {
    color: string
}

export type ColorsType = 'bug' | 'dragon' | 'electric' | 'fairy' | 'fighting' | 'fire' | 'flying' | 'grass' | 'ground' | 'ghost' | 'ice' | 'normal' | 'poison' | 'psychic' | 'rock' | 'water';
export type PokemonKindType = ColorsType

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

export interface FilterPokemonProps {
    onFilterChange: (event: PokemonKindType) => void
}