import characters from '../../redux/characters/reducer';

test('should return the initial state', () => {
  expect(characters(undefined, {})).toEqual([]);
});
