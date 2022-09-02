import { getCivilizations } from './redux/civilizations/actions';
import { getStructures } from './redux/structures/actions';
import { getUnits } from './redux/units/actions';
import { getTechnologies } from './redux/technologies/actions';

export const categories = ['civilizations', 'units', 'structures', 'technologies'];
export const categoriesActions = {
  civilizations: getCivilizations(),
  structures: getStructures(),
  units: getUnits(),
  technologies: getTechnologies(),
};
export const appColors = {
  bgOne: {
    backgroundColor: '#31347a',
  },
  bgTwo: {
    backgroundColor: '#383877',
  },
};
