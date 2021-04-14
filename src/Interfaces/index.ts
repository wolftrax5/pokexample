
export interface NamedAPIResource  {
    url	: string;
    name: string;
}
export const EMPTY_NamedAPIResource = {
    url	: '',
    name: '',
}
export interface Language {
    id: number;
    name: string;
    official: boolean;
    iso3166: string;
    iso639: string;
    names: Name[];
}
export interface Name {
    name: string;
    language: Language;
}
export interface GenerationGameIndex  {
    game_index: number;
    generation: NamedAPIResource
}
export const EMPTY_GenerationGameIndex:GenerationGameIndex= {
    game_index: 0,
    generation: EMPTY_NamedAPIResource
}
export interface TypePokemon {
    slot: number;
    pokemon: NamedAPIResource;
}
export const EMPTY_TypePokemon:TypePokemon= {
    slot: 0,
    pokemon: EMPTY_NamedAPIResource
}
export interface TYPE_RELATION {
    no_damage_to: NamedAPIResource[];
    half_damage_to: NamedAPIResource[];
    double_damage_to: NamedAPIResource[];
    no_damage_from: NamedAPIResource[];
    half_damage_from: NamedAPIResource[];
    double_damage_from: NamedAPIResource[];
}
export const  EMPTY_TYPE_RELATION:TYPE_RELATION = {
    no_damage_to: [],
    half_damage_to:[],
    double_damage_to: [],
    no_damage_from: [],
    half_damage_from: [],
    double_damage_from: [],
}
export interface POKETYPE_API {
    id: number;
    name: string;
    damage_relations: TYPE_RELATION;
    game_indices: GenerationGameIndex;
    generation:  NamedAPIResource;
    move_damage_class: NamedAPIResource;
    names: Name[];
    pokemon: TypePokemon[];
    moves: NamedAPIResource;
}
export const EMPTY_POKETYPE_API:POKETYPE_API = {
    id: 0,
    name: '',
    damage_relations:EMPTY_TYPE_RELATION,
    game_indices: EMPTY_GenerationGameIndex,
    generation: EMPTY_NamedAPIResource,
    move_damage_class: EMPTY_NamedAPIResource,
    names: [],
    pokemon: [],
    moves: EMPTY_NamedAPIResource,
}

export interface REDUCER_ACTION {
    type: string;
    payload: any;
}
