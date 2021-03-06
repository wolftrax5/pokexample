import {URL_FRONT_SPRITES} from '../consts';

export const  getPokemonSprite = (id: string) => `${URL_FRONT_SPRITES}${id}.png`;

export const getIdByUrl = (url: string) => {
    let pathId = /\/(\d+)\//g;
    const match = url.match(pathId) || [];

    return match[0].replaceAll('/', '');
}