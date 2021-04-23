import {useEffect,Suspense, useState} from 'react';
import {Grid } from '@material-ui/core';

import {SuspenseImg} from '../SuspenseImg';
import { NamedAPIResource, TypePokemon} from '../../Interfaces';
import {getIdByUrl, getPokemonSprite} from '../../Utils/pokemons'

interface IPokeGridProps {
    pokemons: TypePokemon[];
    onPokeClick: () => void;
}
const Loading = () => (<h1>Loading</h1>);

export const PokeGrid = ({pokemons, onPokeClick}: IPokeGridProps) => {
    const [pokemonType, ] = useState(pokemons);
    const [showPokemons, ] = useState(pokemons.length > 0);

    return (
    <Suspense fallback={<Loading />}>
    {
    showPokemons ?
    <Grid container  spacing={2}>
     {
        pokemonType.map((item: TypePokemon)=> (
        <Grid key={item.pokemon.name} item onClick={onPokeClick}>
            <PokeShow pokemon={item.pokemon}/>
        </Grid>
        ))
    }
    </Grid>
    : 'wait a second'
    }
    </Suspense>)
}


interface IPokeShowProps {
    pokemon: NamedAPIResource;
}

const PokeShow = ({pokemon}: IPokeShowProps) => {
    const [pokemonId, setPokemonId] = useState('');
    const [pokemonSprite, setPokemonSPrite] = useState('');
    useEffect(()=> {
        setPokemonId(getIdByUrl(pokemon.url))
    }, [pokemon])

    useEffect(()=> {
        if(pokemonId.length > 0) {

            setPokemonSPrite(getPokemonSprite(pokemonId))
        }
    }, [pokemonId])
    return(
        <>
            <SuspenseImg src={pokemonSprite} alt={pokemon.name}/>
            <h2 style={{textAlign: 'center'}}>{pokemon.name.split("-").map(function(item, idx) {
        return (
            <span key={idx}>
                {item}
                <br/>
            </span>
         )
    })}</h2>
        </>
    )
}
