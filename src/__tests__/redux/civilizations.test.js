import civilizations from '../../redux/civilizations/reducer';

test('should return the initial state', () => {
  expect(civilizations([], {})).toEqual([]);
});