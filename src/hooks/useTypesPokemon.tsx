import { useEffect, useReducer } from 'react';
import { POKETYPE_API, REDUCER_ACTION }from '../Interfaces'
import {useFetchPokemonEnpoint} from '../hooks/useFetchData';
import { fetchTypes } from '../Utils/api/types';

interface TypesReducesState {
    pokeTypes: POKETYPE_API[];
}

const initialState:TypesReducesState = {
    pokeTypes: [],

}

const TypesPokemonReducer = (state:TypesReducesState, action: REDUCER_ACTION) => {
    switch(action.type) {
        case 'INITIAL_DATA':
            const pokeTypes = action.payload
            return { pokeTypes }
        default:
            return state;
    }
}

export const usePokeTypesList = () => {
    let { response, loading, fetchData} = useFetchPokemonEnpoint(fetchTypes,[])

    useEffect(() => {
        fetchData()
    }, [])

    return { response, loading, fetchData}
}