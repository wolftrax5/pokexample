import {useEffect, useState} from 'react';
import {Grid } from '@material-ui/core';

import { NamedAPIResource, TypePokemon} from '../../Interfaces';
import {getIdByUrl} from '../../Utils/pokemons'

interface IPokeGridProps {
    pokemons: TypePokemon[];
}

export const PokeGrid = ({pokemons}: IPokeGridProps) => {
    const [pokemonType, ] = useState(pokemons);
    const [showPokemons, ] = useState(pokemons.length > 0);

    return (
    <>
    {
    showPokemons ?
    <Grid container  spacing={2}>
    {
        pokemonType.map((item: TypePokemon)=> (
        <Grid key={item.pokemon.name} item>
            <PokeShow pokemon={item.pokemon}/>
        </Grid>
        ))
    }
    </Grid>
    : 'wait a second'
    }
    </>)
}


interface IPokeShowProps {
    pokemon: NamedAPIResource;
}

const PokeShow = ({pokemon}: IPokeShowProps) => {
    const [pokemonId, setPokemonId] = useState('');
    useEffect(()=> {
        setPokemonId(getIdByUrl(pokemon.url))
    }, [pokemon])
    return(<h2>{pokemon.name} {pokemonId}</h2>)
}
