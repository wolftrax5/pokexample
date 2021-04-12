
export interface NamedAPIResource  {
    url	: string;
    name: string;
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
export interface TypePokemon {
    slot: number;
    pokemon: NamedAPIResource;
}
export interface POKETYPE_API {
    id: number;
    name: string;
    damage_relations: TYPE_RELATION;
    game_indices: GenerationGameIndex;
    generation:  NamedAPIResource;
    move_damage_class: NamedAPIResource;
    names: Name[];
    pokemon: TypePokemon;
    moves: NamedAPIResource;
}
export interface TYPE_RELATION {
    no_damage_to: NamedAPIResource[];
    half_damage_to: NamedAPIResource[];
    double_damage_to: NamedAPIResource[];
    no_damage_from: NamedAPIResource[];
    half_damage_from: NamedAPIResource[];
    double_damage_from: NamedAPIResource[];
}

export interface REDUCER_ACTION {
    type: string;
    payload: any;
}
