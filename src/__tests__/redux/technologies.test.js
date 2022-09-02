;import technologies from '../../redux/technologies/reducer';

test('should return the initial state', () => {
  expect(technologies(undefined, {})).toEqual([]);
});