import {API_POKE_TYPES} from '../consts';
interface NamedAPIResource  {
    url	: string;
    name: string;
}
interface Language {
    id: number;
    name: string;
    official: boolean;
    iso3166: string;
    iso639: string;
    names: Name[];
}
interface Name {
    name: string;
    language: Language;
}
interface GenerationGameIndex  {
    game_index: number;
    generation: NamedAPIResource
}
interface TypePokemon {
    slot: number;
    pokemon: NamedAPIResource;
}
interface POKETYPE_API {
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
interface TYPE_RELATION {
    no_damage_to: NamedAPIResource[];
    half_damage_to: NamedAPIResource[];
    double_damage_to: NamedAPIResource[];
    no_damage_from: NamedAPIResource[];
    half_damage_from: NamedAPIResource[];
    double_damage_from: NamedAPIResource[];
}
export async function fetchTypes(){

    const response = await fetch(API_POKE_TYPES)
    const {results} =  await response.json()

    const  pokeTypes = await Promise.all(results.map(async (poketype: NamedAPIResource) => {
        const contents = await fetch(poketype.url)
        const res =  await contents.json()
        return res
    }));
    console.log('pokeTypes', pokeTypes)
    return pokeTypes;
}