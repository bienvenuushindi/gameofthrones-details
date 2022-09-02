import { getHouses } from './redux/houses/actions';
import { getCharacters } from './redux/characters/actions';

export const actionSources = ['houses', 'characters'];
export const homeActions = {
  houses: getHouses(),
  characters: getCharacters(),
};
export const appColors = {
  bgOne: {
    backgroundColor: '#31347a',
  },
  bgTwo: {
    backgroundColor: '#383877',
  },
};
