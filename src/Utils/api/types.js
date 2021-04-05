import {API_POKE_TYPES} from '../consts';

export async function fetchTypes() {

    const response = await fetch(API_POKE_TYPES)
    const {results} =  await response.json()

    const  pokeTypes = await Promise.all(results.map(async (poketype) => {
        const contents = await fetch(poketype.url)
        const res =  await contents.json()
        return res
    }));

    return pokeTypes;
}