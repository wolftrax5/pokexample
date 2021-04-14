import {URL_FRONT_SPRITES} from '../consts';

export const  getPokemonSprite = (id: number) => `${URL_FRONT_SPRITES}${id}.png`;

export const getIdByUrl = (url: string) => {
    let pathId = /\/(\d+)\//g;
    const match = url.match(pathId);
    console.log(match);
}