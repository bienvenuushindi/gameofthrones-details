import structures from '../../redux/structures/reducer';

test('should return the initial state', () => {
  expect(structures(undefined, {})).toEqual([]);
});