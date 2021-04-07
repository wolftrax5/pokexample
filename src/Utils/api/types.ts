import { API_POKE_TYPES } from '../consts';
import { NamedAPIResource, POKETYPE_API } from '../../Interfaces'

export async function fetchTypes(): Promise<POKETYPE_API[]>{
    let pokeTypes: Array<POKETYPE_API>;
    const response = await fetch(API_POKE_TYPES)
    const {results} =  await response.json()

    pokeTypes = await Promise.all(results.map(async (poketype: NamedAPIResource) => {
        const contents = await fetch(poketype.url)
        const res =  await contents.json()
        return res
    }));

    return pokeTypes;
}